import reflex as rx
from portfolio.components import form

def contact():
    return rx.box(
        form.form(),
    )