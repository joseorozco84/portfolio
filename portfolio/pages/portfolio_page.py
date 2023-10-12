import reflex as rx
from portfolio.components import repos

def portfolio():
    return rx.box(
        rx.responsive_grid(
            repos.repo1(),
            columns=[1,1,1,2,2],
            margin_top=["20%","10%"],
            margin_bottom="10%",
            width="90%",
        ),
        max_width="1200px",
        gap="20px",
    )