import reflex as rx

def repo1():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Portfolio",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/portfolio",
        is_external=True,
        style=text_style,
    )

def repo2():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Farmacia",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/farmacia",
        is_external=True,
        style=text_style,
    )

def repo3():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Coderblog",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/coderblog",
        is_external=True,
        style=text_style,
    )

def repo4():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Password Generator",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/pass_gen",
        is_external=True,
        style=text_style,
    )

def repo5():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Sudoku Generator",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/sudoku-generator",
        is_external=True,
        style=text_style,
    )

def repo6():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Metacritic Scraper",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/scraper",
        is_external=True,
        style=text_style,
    )

def repo7():
    return rx.link(
        rx.box(
            rx.center(
                rx.vstack(
                    rx.image(src="/Placeholder.png", width="256px"),
                    rx.text("Image to ASCII",)
                ),
            ),
            style=box_style,
        ),
        href="https://github.com/joseorozco84/Image-to-ASCII",
        is_external=True,
        style=text_style,
    )



box_style = {
    "padding": "1em",
    "backdrop_filter": "blur(5px)",
    "background_color": "rgb(20, 20, 20, 0.5)",
    "box_shadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
    "border_radius": "10px",
    "user_select": "none",
}

text_style = {
    "text_color": "white",
    "font_size": ["18px","22px"],
    "font_weight": "bold",
    "font_family": "monospace",
    "margin": "3%",
    "_hover":{
        "text_decoration": "none",
        "text_color": "#2b6cb0",
    }
}