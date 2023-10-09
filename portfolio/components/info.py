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
            font_size="2.5em",
        ),
        rx.text(
            """Hello! 👋 My name is Jose and I am passionate about programming with a strong work ethic.
            My methodical approach and attention to detail allow me to tackle projects meticulously and ensure quality in every line of code I write.
            I am an enthusiastic self-learner who is motivated by technological challenges and quickly acquires new skills and technologies.
            I have the versatility to work both collaboratively in teams and independently.
            My determination and dedication drive me to achieve my goals and exceed expectations in every project I undertake.""",
            text_color="white",
            font_size=["1em","1.8em","2em","2em"],
            font_family="monospace",
            margin="3%",
        ),
        padding="1em",
        # background_color="rgb(20, 20, 20, 0.5)",
        backdrop_filter="blur(5px)",
        border_radius="10px",
        user_select="none",
        max_width="800px",
    )

def page():
    return rx.box(
        rx.heading(
            "About this website",
            font_family="monospace",
            user_select="none",
            text_color="rgb(255, 255, 255)",
            margin="3%",
            margin_bottom="0",
            font_size="2em",
        ),
        rx.text(
            """Welcome to my portfolio! Built with """,
            rx.link("Python",href="https://www.python.org/",color="rgb(121,246,99)",),
            """ and """,
            rx.link("Reflex",href="https://reflex.dev/",color="rgb(107,99,246)",),
            """ framework, this website is where I showcase my projects and skills. 🐍💻 It's a work in progress, and I'm excited to share my journey with you. """,
            text_color="white",
            font_size=["1em","1.5em","1.5em","1.5em"],
            font_family="monospace",
            margin="3%",
        ),
        backdrop_filter="blur(5px)",
        border_radius="10px",
        user_select="none",
        padding="1em",
        height="fit-content",
        bg_color="gray",
    )