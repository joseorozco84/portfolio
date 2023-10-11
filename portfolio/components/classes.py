from typing import Any
import reflex as rx

class ParentState(rx.State):
    pass

class ParentComponent(rx.Component):
    pass


  
class ModalState(ParentState):
    show: bool = False

    def change(self):
        self.show = not (self.show)
