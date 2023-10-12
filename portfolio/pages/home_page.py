import reflex as rx
from portfolio.components import avatar, skills


def home():
    return rx.box(
        rx.responsive_grid(
            avatar.avatar(),
            skills.skills(),
            columns=[1,1,1,2,2],
            margin_top=["20%","10%"],
            margin_bottom="10%",
            gap="20px",
        ),
            width="90%",
            max_width="1200px",
    )