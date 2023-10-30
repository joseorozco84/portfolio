# Stage 1: init
FROM python:3.11 as init

# Pass `--build-arg API_URL=http://app.example.com:8000` during build
ARG API_URL

# Copy local context to `/app` inside container (see .dockerignore)
WORKDIR /portfolio
COPY . .

# Create virtualenv which will be copied into final container
ENV VIRTUAL_ENV=/portfolio/.venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN python3 -m venv $VIRTUAL_ENV

# Install app requirements and reflex inside virtualenv
RUN pip install -r requirements.txt

# Deploy templates and prepare app
RUN reflex init

# Export static copy of frontend to /app/.web/_static
RUN reflex export --frontend-only --no-zip

# Copy static files out of /app to save space in backend image
RUN mv .web/_static /tmp/_static
RUN rm -rf .web && mkdir .web
RUN mv /tmp/_static .web/_static

# Stage 2: copy artifacts into slim image 
FROM python:3.11-slim
ARG API_URL
WORKDIR /portfolio
RUN adduser --disabled-password --home /portfolio reflex
COPY --chown=reflex --from=init /portfolio /portfolio
USER reflex
ENV PATH="/portfolio/.venv/bin:$PATH" API_URL=$API_URL

CMD reflex db migrate && reflex run --env prod --backend-only
