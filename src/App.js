import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {
    Button,
    ButtonToolbar,
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {Link as ScrollLink, Element, Events, animateScroll as scroll, scroller} from 'react-scroll'


class Index extends React.Component {
    render() {
        return (
            <div className="center">
                <h1>Welcome to my site!</h1>
                <ButtonToolbar>
                    <Link to="/template1">
                        <Button variant="outline-secondary">
                            Template 1
                        </Button>
                    </Link>

                    <Link to="/template2">
                        <Button variant="outline-secondary">
                            Template 2
                        </Button>
                    </Link>

                    <Link to="/template3">
                        <Button variant="outline-secondary">
                            Template 3
                        </Button>
                    </Link>

                </ButtonToolbar>
            </div>
        )
    }
}

class Template1 extends React.Component {

    constructor(props) {
        super(props);
        Template1.scrollToTop = Template1.scrollToTop.bind(this);
        this.closeNavBar = this.closeNavBar(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }

    static scrollToTop() {
        Template1.scrollToTop();
    }

    static scrollTo() {
        Template1.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    closeNavBar() {
        this.setState(
            {
                navExpanded: false
            }
        );
    }

    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            Template1.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            Template1.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand>Carson Badger</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link>
                                <ScrollLink activeClass="active" className="aboutMe" to="aboutMe" spy={true}
                                            smooth={true} duration={500} offset={-60}>
                                    About Me
                                </ScrollLink>
                            </Nav.Link>

                            <Nav.Link>
                                <ScrollLink activeClass="active" className="resume" to="resume" spy={true} smooth={true}
                                            duration={500} offset={-60}>
                                    Resume
                                </ScrollLink>
                            </Nav.Link>

                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <ScrollLink activeClass="active" className="project1" to="project1" spy={true}
                                                smooth={true} duration={500} offset={-60}>
                                        Project 1
                                    </ScrollLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <ScrollLink activeClass="active" className="project2" to="project2" spy={true}
                                                smooth={true} duration={500} offset={-60}>
                                        Project 2
                                    </ScrollLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <ScrollLink activeClass="active" className="project3" to="project3" spy={true}
                                                smooth={true} duration={500} offset={-60}>
                                        Project 3
                                    </ScrollLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <Element name="aboutMe" className="element">
                                About Me
                            </Element>
                            <Col>
                                Here is a ton of stuff about me
                            </Col>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Element name="resume" className="element">
                                Resume
                            </Element>
                            <Col>
                                Here is my super fancy resume
                            </Col>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Element name="projects" className="element">
                                Projects
                            </Element>
                            <Col>
                                Here are some of my projects I have worked on
                                <Row>
                                    <Col>
                                        <Element name="project1" className="element">
                                            Project 1
                                        </Element>
                                        <Col>
                                            This project does x,y and z
                                        </Col>
                                        <hr/>
                                    </Col>
                                    <Col>
                                        <Element name="project2" className="element">
                                            Project 3
                                        </Element>
                                        <Col>
                                            This project does x,y and z
                                        </Col>
                                        <hr/>
                                    </Col>

                                    <Col>
                                        <Element name="project3" className="element">
                                            Project 3
                                        </Element>
                                        <Col>
                                            This project does x,y and z
                                        </Col>
                                        <hr/>
                                    </Col>

                                </Row>
                            </Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Template2 extends React.Component {
    render() {
        return (
            <div className="center" id="template2">
                <h1>Template 2</h1>
            </div>
        )
    }
}

class Template3 extends React.Component {
    render() {
        return (
            <div className="center" id="template3">
                <h1>Template 3</h1>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Index}/>
                <Route path="/template1" component={Template1}/>
                <Route path="/template2" component={Template2}/>
                <Route path="/template3" component={Template3}/>
            </BrowserRouter>
        )
    }
}

export default App;