import reflex as rx
from portfolio.components import form

def contact():
    return rx.responsive_grid(
        form.form(),
        # columns=[1,1,1,2,2],
        margin_top=["25%","20%","20%","15%","10%"],
        border_radius="1em",
        width=["90%","90%","80%"],
        max_width="800px",
    )