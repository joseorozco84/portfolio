import reflex as rx
from portfolio.components import repos

def portfolio():
    return rx.responsive_grid(
        repos.repo1(),
        columns=[1,1,1,2,2],
        margin_top=["20%","20%","10%","10%","10%"],
        margin_bottom="10%",
        border_radius="10px",
        width=["90%","90%","80%"],
        max_width="1200px",
        gap="20px",
    )