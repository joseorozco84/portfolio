import reflex as rx

def avatar():
    return rx.box(
        rx.vstack(
            rx.image(
                src="/pic.jpg",
                width=["250px","300px","300px"],
                size="xxl",
                border_radius="1em",            
                user_select="none",
                margin="1em",
                ),
            rx.heading(
                "Hi! I'm Jose",
                font_family="monospace",
                font_size=["1.8em","2.5em","3em"],
                border_radius="0.3em",
                text_color="white",
                text_shadow="0px 0px 10px black",
                user_select="none",
                ),
            rx.text(
                "jr.developer",
                text_color="green",
                font_size=["1.5em","1.8em","2em"],
                user_select="none",
                ),
            margin="2em",
            ),        
        # background_color="rgb(20, 20, 20, 0.5)",
        backdrop_filter="blur(5px)",
        border_radius="10px",
        _hover={
            "transform": "scale(1.05)",
            "transition": "0.5s",
            },
        )