import reflex as rx
from portfolio.components import form

def contact():
    return rx.box(
        rx.responsive_grid(
            form.form(),
            form.social(),
            # columns=[1,1,1,2,2],
            margin_top=["20%","10%"],
            margin_bottom="10%",
            gap="20px",
        ),
        width="90%",
        max_width="800px",
    )