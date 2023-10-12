import reflex as rx
from reflex.components import Component

class PortfolioConfig(rx.Config):
    pass

config = PortfolioConfig(
    app_name="portfolio",
    # frontend_packages=["react-colorful"],
)