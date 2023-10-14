import reflex as rx
from portfolio.components import repos

def repositories():
    return rx.box(
        rx.vstack(
            repos.repo1(),
            repos.repo2(),
            repos.repo3(),
            repos.repo4(),
            repos.repo5(),
            repos.repo6(),
            repos.repo7(),
            # columns=[1,1,1,1,1],
            gap="20px",
            margin_top=["20%","10%"],
            margin_bottom="10%",
        ),
        width="90%",
        max_width="1200px",
    )