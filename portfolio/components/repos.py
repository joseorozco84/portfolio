import reflex as rx

def repo1():
    return rx.box(
        rx.vstack(
            rx.text("Repo #1"),
            rx.text("Repo #2"),
            rx.text("Repo #3"),
        )
    )