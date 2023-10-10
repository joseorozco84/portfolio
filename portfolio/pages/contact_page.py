import reflex as rx
from portfolio.components import form

def contact():
    return rx.responsive_grid(
        form.form(),
        form.social(),
        # columns=[1,1,1,2,2],
        margin_top=["20%","20%","10%","10%","10%"],
        margin_bottom="10%",
        border_radius="10px",
        width="90%",
        max_width="800px",
        gap="20px",
    )