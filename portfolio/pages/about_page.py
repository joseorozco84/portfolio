import reflex as rx
from portfolio.components import about


def about():
    return rx.responsive_grid(
        columns=[1,1,1,2,2],
        margin_top=["25%","25%","20%","15%","10%"],
        gap="1em",
        border_radius="1em",
        width=["90%","90%","80%"],
        max_width="1200px",
    )