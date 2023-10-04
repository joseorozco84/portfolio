import reflex as rx

def avatar():
    return rx.box(
        rx.vstack(
            rx.image(
                src="/pic.jpg",
                width=["250px","350px","350px"],
                size="xxl",
                border_radius="1em",            
                user_select="none",
                margin="1em",
                ),
            rx.text(
                "Hi! I'm Jose",
                font_size=["1.8em","2.5em","3em"],
                font_family="monospace",
                border_radius="0.3em",
                text_color="white",
                text_shadow="0px 0px 10px black",
                user_select="none",
                ),
            rx.text(
                "jr.developer",
                text_color="green",
                font_size=["1.5em","1.8em","2em"],
                font_family="monospace",
                user_select="none",
                ),
        margin="2em",
            ),
        
        
        background_color="rgb(1, 1, 1, 0.25)",
        backdrop_filter="blur(5px)",
        # max_width="1200px",
        # margin_top=["25%","15%","15%","10%"],
        # width=["90%","90%","80%"],
        # overflow="hidden",
        border_radius="1em",
        _hover={
            "transform": "scale(1.1)",
            "transition": "0.5s",
            },
        )