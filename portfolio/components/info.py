import reflex as rx

def info():
    return rx.box(
        rx.text(
            """Hello! 👋 My name is Jose and I am passionate about programming with a strong work ethic.
            My methodical approach and attention to detail allow me to tackle projects meticulously and ensure quality in every line of code I write.
            I am an enthusiastic self-learner who is motivated by technological challenges and quickly acquires new skills and technologies.
            I have the versatility to work both collaboratively in teams and independently.
            My determination and dedication drive me to achieve my goals and exceed expectations in every project I undertake.""",
            text_color="white",
            font_size=["14px","22px"],
            font_weight="bold",
            font_family="monospace",
            margin="3%",
        ),
        padding="1em",
        backdrop_filter="blur(5px)",
        background_color="rgb(20, 20, 20, 0.5)",
        box_shadow="rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
        border_radius="10px",
        user_select="none",
    )

def page():
    return rx.box(
        rx.text(
            """Welcome to my portfolio! Built with """,
            rx.link("Python",href="https://www.python.org/",color="rgb(121,246,99)",is_external=True,),
            """ 🐍 and """,
            rx.link("Reflex",href="https://reflex.dev/",color="rgb(107,99,246)",is_external=True,),
            """ framework, this website is where I showcase my projects and skills. It's a work in progress, and I'm excited to share my journey with you. """,
            text_color="white",
            font_size=["14px","22px"],
            font_weight="bold",
            font_family="monospace",
            margin="3%",
        ),
        backdrop_filter="blur(5px)",
        background_color="rgb(20, 20, 20, 0.5)",
        box_shadow="rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
        border_radius="10px",
        user_select="none",
        padding="1em",
        height="fit-content",
    )