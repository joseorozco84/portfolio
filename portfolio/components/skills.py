import reflex as rx

def skills():
    return rx.center(
        rx.list(
            rx.list_item(
                "💻 Programming Skills",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"#2b6cb0",
                    },
                ),
            rx.list_item(
                "🧩 Problem-Solving",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"#2b6cb0",
                    },
                ),
            rx.list_item(
                "🤝 Team Collaboration",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"#2b6cb0",
                    },
                )
                ,
            rx.list_item(
                "📂 Project Management",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"#2b6cb0",
                    },
                ),
            rx.list_item(
                "🌟 Adaptability",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"#2b6cb0",
                    },
                ),
            margin="1em",
            spacing="1em",
        ),
        justify_content="space-evenly",
        font_weight="bold",
        font_size=["1.5em","2em", "2em", "2em", "2.5em"],
        # background_color="rgb(20, 20, 20, 0.5)",
        backdrop_filter="blur(5px)",
        border_radius="10px",
        min_height="350px",
        user_select="none",
    )