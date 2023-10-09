import reflex as rx
from portfolio.components import info


def about():
    return rx.responsive_grid(
        info.info(),
        # columns=[1,1,1,2,2],
        margin_top=["15%","15%","10%","10%","10%"],
        margin_bottom="10%",
        border_radius="10px",
        width=["90%","90%","80%"],
        max_width="800px",
    )