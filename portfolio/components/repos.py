import reflex as rx

def repo1():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Portfolio Web",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        rx.tooltip(rx.image(src="/langs/icons8-css-32.ico",width=["16px","32px"]),label="CSS"),
                        # rx.tooltip(rx.image(src="/langs/icons8-javascript-32.ico",width=["16px","32px"]),label="JavaScript"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""My portfolio web project is an elegant and fully responsive platform designed to showcase my work and skills effectively. Developed using Python and the modern Reflex framework, this website ensures an exceptional user experience on devices of all sizes. I present my portfolio in an appealing manner, highlighting my projects, achievements, and skills in a visually attractive and easy-to-navigate way.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/portfolio",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )

def repo2():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Pharmacy Database",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        rx.tooltip(rx.image(src="/langs/icons8-sql-32.ico",width=["16px","32px"]),label="MySQL"),
                        # rx.tooltip(rx.image(src="/langs/icons8-api-32.ico",width=["16px","32px"]),label="FastAPI"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""My database project is centered around a pharmacy chain and utilizes MySQL as the database management system. I gather and analyze data related to sales, inventory, and other relevant aspects of pharmacy operations. I then visualize this data through a dashboard with bar charts and pie charts, providing a clear visual representation of trends and patterns. Additionally, I have integrated FastAPI to create endpoints that enable efficient and secure access to this data via a web dashboard, making it easy to interact with and query the information stored in the database.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/farmacia",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )

def repo3():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Coderblog Web",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        rx.tooltip(rx.image(src="/langs/icons8-html-32.ico",width=["16px","32px"]),label="HTML"),
                        rx.tooltip(rx.image(src="/langs/icons8-css-32.ico",width=["16px","32px"]),label="CSS"),
                        rx.tooltip(rx.image(src="/langs/icons8-javascript-32.ico",width=["16px","32px"]),label="JavaScript"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""CoderBlog is a collaborative web project created with Python and the Django framework. It represents the collective efforts of a team of three individuals, including myself. CoderBlog serves as a dynamic platform where we share our insights, experiences, and expertise in the world of coding, software development, and technology. Through a user-friendly and aesthetically pleasing interface, we provide informative and engaging content, including articles, tutorials, and discussions, all centered around the ever-evolving field of coding. Our joint efforts have culminated in a rich resource for both seasoned developers and those just embarking on their coding journey.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/coderblog",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )

def repo4():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Password Generator",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        rx.tooltip(rx.image(src="/langs/icons8-html-32.ico",width=["16px","32px"]),label="HTML"),
                        rx.tooltip(rx.image(src="/langs/icons8-css-32.ico",width=["16px","32px"]),label="CSS"),
                        # rx.tooltip(rx.image(src="/langs/icons8-javascript-32.ico",width=["16px","32px"]),label="JavaScript"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""My password generator project was developed while I was in the process of learning Python and Django. With this application, users can easily create secure and unique passwords. As I advanced in my learning journey, I built this tool as a part of my personal development and to apply my knowledge in web application development. The password generator serves as a testament to my progress and skills in Python and Django.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/pass_gen",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )

def repo5():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Sudoku Generator",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        # rx.tooltip(rx.image(src="/langs/icons8-html-32.ico",width=["16px","32px"]),label="HTML"),
                        # rx.tooltip(rx.image(src="/langs/icons8-css-32.ico",width=["16px","32px"]),label="CSS"),
                        # rx.tooltip(rx.image(src="/langs/icons8-javascript-32.ico",width=["16px","32px"]),label="JavaScript"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""My Sudoku generator project, created while learning Python, automatically generates Sudoku puzzles. It offers logic-based challenges with customizable difficulty levels and provides solutions for each puzzle. The user interface (UI) was built using Tkinter, showcasing my programming progress and offering a fun experience for puzzle enthusiasts.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/sudoku-generator",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )

def repo6():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Metacritic Scraper",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        # rx.tooltip(rx.image(src="/langs/icons8-html-32.ico",width=["16px","32px"]),label="HTML"),
                        # rx.tooltip(rx.image(src="/langs/icons8-css-32.ico",width=["16px","32px"]),label="CSS"),
                        # rx.tooltip(rx.image(src="/langs/icons8-javascript-32.ico",width=["16px","32px"]),label="JavaScript"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""My Metacritic game links scraping project is an application I developed while learning Python. This automated tool gathers links to games from Metacritic and stores them in a txt file, making it easier for users to access critical information about games and reviews. The project represents a milestone in my Python learning journey and showcases my web data extraction skills. I utilize requests and xpath libraries along with concurrent futures to run parallel tasks.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/scraper2",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )

def repo7():
    return rx.box(
        rx.link(
                # rx.image(src="/Placeholder.png",width="100vw",height="auto%", object_fit="cover"),
            rx.vstack(
                rx.flex(
                    rx.text("Image to ASCII Generator",font_size=["18px","22px"]),
                    rx.spacer(),
                    rx.hstack(
                        rx.tooltip(rx.image(src="/langs/icons8-python-32.ico",width=["16px","32px"]),label="Python"),
                        # rx.tooltip(rx.image(src="/langs/icons8-html-32.ico",width=["16px","32px"]),label="HTML"),
                        # rx.tooltip(rx.image(src="/langs/icons8-css-32.ico",width=["16px","32px"]),label="CSS"),
                        # rx.tooltip(rx.image(src="/langs/icons8-javascript-32.ico",width=["16px","32px"]),label="JavaScript"),
                    ),
                    width="100%",                        
                ),
                rx.divider(border_color="gray"),
                rx.text("""My Metacritic game links scraping project is an application I developed while learning Python. This automated tool gathers links to games from Metacritic and stores them in a txt file, making it easier for users to access critical information about games and reviews. The project represents a milestone in my Python learning journey and showcases my web data extraction skills. I utilize requests and xpath libraries along with concurrent futures to run parallel tasks.""",
                    style=text_style,
                ),
                align_items="self-start",
                margin="26px",
            ),
            href="https://github.com/joseorozco84/Image-to-ASCII",
            is_external=True,
            style=href_style,
        ),
        style=box_style,
    )



box_style = {
    # "padding": "1em",
    "backdrop_filter": "blur(5px)",
    "background_color": "rgb(20, 20, 20, 0.5)",
    "box_shadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
    "border_radius": "10px",
    "user_select": "none",
}

text_style = {
    "text_color": "white",
    "font_size": ["14px","17px"],
    "font_weight": "bold",
    "font_family": "monospace",
}

href_style = {
    "text_color": "white",
    "font_size": ["20px","24px"],
    "font_weight": "bold",
    "font_family": "monospace",
    "_hover":{
        "text_decoration": "none",
        "text_color": "#2b6cb0",
    }
}