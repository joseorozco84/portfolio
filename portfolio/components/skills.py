import reflex as rx

def skills():
    return rx.vstack(
        rx.text(
            "Programming Skills 💻",
            _hover={
                "transform": "scale(1.1)",
                "transition": "0.5s",
                "color":"darkgreen",
                },
            ),
        rx.text(
            "Problem-Solving 🧩",
            _hover={
                "transform": "scale(1.1)",
                "transition": "0.5s",
                "color":"darkgreen",
                },
            ),
        rx.text(
            "Team Collaboration 🤝",
            _hover={
                "transform": "scale(1.1)",
                "transition": "0.5s",
                "color":"darkgreen",
                },
            )
            ,
        rx.text(
            "Project Management 📂",
            _hover={
                "transform": "scale(1.1)",
                "transition": "0.5s",
                "color":"darkgreen",
                },
            ),
        rx.text(
            "Adaptability 🌟",
            _hover={
                "transform": "scale(1.1)",
                "transition": "0.5s",
                "color":"darkgreen",
                },
            ),
        font_family="monospace",
        text_color="white",
        font_size=["1.2em","1.5em", "1.8em", "1.8em", "2em"],
        justify_content="space-evenly",
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        border_radius="1em",
        min_height="250px",
        margin="2em",
        user_select="none",
    )