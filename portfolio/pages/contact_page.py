import reflex as rx
from portfolio.components import form

def contact():
    return rx.responsive_grid(
        form.form(),
        # columns=[1,1,1,2,2],
        margin_top=["15%","15%","10%","10%","10%"],
        margin_bottom="10%",
        border_radius="10px",
        width=["90%","90%","80%"],
        max_width="800px",
    )