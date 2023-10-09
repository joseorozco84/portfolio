import reflex as rx

def skills():
    return rx.center(
        rx.list(
            rx.list_item(
                "💻 Programming Skills",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"darkgreen",
                    },
                ),
            rx.list_item(
                "🧩 Problem-Solving",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"darkgreen",
                    },
                ),
            rx.list_item(
                "🤝 Team Collaboration",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"darkgreen",
                    },
                )
                ,
            rx.list_item(
                "📂 Project Management",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"darkgreen",
                    },
                ),
            rx.list_item(
                "🌟 Adaptability",
                _hover={
                    "transform": "scale(1.1)",
                    "transition": "0.5s",
                    "color":"darkgreen",
                    },
                ),
            margin="1em",
            spacing="1em",
        ),
        justify_content="space-evenly",
        font_size=["1.3em","1.8em", "1.8em", "2em", "2.3em"],
        # background_color="rgb(20, 20, 20, 0.5)",
        backdrop_filter="blur(5px)",
        border_radius="10px",
        min_height="350px",
        user_select="none",
    )