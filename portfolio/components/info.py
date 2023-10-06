import reflex as rx

def info():
    return rx.vstack(
        rx.heading(
            "About me",
            font_family="monospace",
            user_select="none",
            text_color="rgb(255, 255, 255)",
            margin="3%",
            margin_bottom="0",
        ),
        rx.text(
            """Hello! 👋 My name is Jose and I am passionate about programming with a strong work ethic.
            My methodical approach and attention to detail allow me to tackle projects meticulously and ensure quality in every line of code I write.
            I am an enthusiastic self-learner who is motivated by technological challenges and quickly acquires new skills and technologies.
            I have the versatility to work both collaboratively in teams and independently.
            My determination and dedication drive me to achieve my goals and exceed expectations in every project I undertake.""",
            text_color="white",
            font_size=["1em","1.8em","2.2em","2.5em"],
            font_family="monospace",
            margin="3%",
        ),
        
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        border_radius="1em",
        user_select="none",
    )