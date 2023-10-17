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
            rx.link(
                rx.button(
                    rx.icon(
                        tag="arrow_up",
                    ),
                    color_scheme="red",
                ),
                position="static",
                bottom=["1%","5%"],
                z_index="1",
                href="#top",
            ),
            # columns=[1,1,1,1,1],
            gap="20px",
            margin_top=["20%","10%"],
            margin_bottom="10%",            
        ),
        id="top",
        width="90%",
        max_width="1200px",
    )