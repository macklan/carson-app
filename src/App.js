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
    Col,
    Jumbotron
} from 'react-bootstrap';
import {Link as ScrollLink, Element, Events, animateScroll as scroll, scroller} from 'react-scroll'

class Index extends React.Component {

    constructor(props) {
        super(props);
        Index.scrollToTop = Index.scrollToTop.bind(this);
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
        Index.scrollToTop();
    }

    static scrollTo() {
        Index.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            Index.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            Index.scrollTo('scroll-container-second-element', {
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
                <Jumbotron>
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <ScrollLink activeClass="active" className="aboutMe" to="aboutMe" spy={true}
                                            smooth={true} duration={500}>
                                    About Me
                                </ScrollLink>
                            </Nav.Link>

                            <Nav.Link>
                                <ScrollLink activeClass="active" className="resume" to="resume" spy={true} smooth={true}
                                            duration={500}>
                                    Resume
                                </ScrollLink>
                            </Nav.Link>

                            <Nav.Link>
                                <ScrollLink activeClass="active" className="coverLetter" to="coverLetter" spy={true}
                                            smooth={true} duration={500}>
                                    Cover Letter
                                </ScrollLink>
                            </Nav.Link>

                            <Nav.Link>
                                <ScrollLink activeClass="active" className="projects" to="projects" spy={true}
                                            smooth={true}
                                            duration={500}>
                                    Projects
                                </ScrollLink>
                            </Nav.Link>

                            <Nav.Link>
                                <ScrollLink activeClass="active" className="contact" to="contact" spy={true}
                                            smooth={true} duration={500}>
                                    Contact Me
                                </ScrollLink>
                            </Nav.Link>

                        </Nav>
                    </Navbar>
                    <h1>
                        Carson M. Badger
                    </h1>
                </Jumbotron>
                <Container>
                    <Row id="aboutMe" className="rowArea">
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
                    <Row id="resume" className="rowArea">
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
                    <Row id="aboutMe" className="rowArea">
                        <Col>
                            <Element name="coverLetter" className="element">
                                Cover Letter
                            </Element>
                            <Col>
                                Here is my super fancy cover letter
                            </Col>
                        </Col>
                    </Row>
                    <hr/>
                    <Row id="projects" className="rowArea">
                        <Col>
                            <Element name="projects" className="element">
                                Projects
                            </Element>
                            <Col>
                                Here are some of my projects I have worked on
                                <Container id="projectArea">
                                    <Row className="justify-content-md-center">
                                        <Col md lg className="projectItem">
                                            Project 1
                                        </Col>
                                        <Col md lg className="projectItem">
                                            Project 1
                                        </Col>
                                        <Col md lg className="projectItem">
                                            Project 1
                                        </Col>
                                        <Col md lg className="projectItem">
                                            Project 1
                                        </Col>

                                    </Row>
                                </Container>
                            </Col>

                        </Col>
                    </Row>
                    <hr/>
                    <Row id="aboutMe" className="rowArea">
                        <Col>
                            <Element name="contact" className="element">
                                Contact Me
                            </Element>
                            <Col>
                                Here is how you can contact me
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Index}/>
            </BrowserRouter>
        )
    }
}

export default App;