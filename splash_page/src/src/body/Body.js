import './Body.css';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


var img = document.getElementsByClassName('hsimage'); 
var widthx = img.clientWidth;
var heighty = img.clientHeight;
console.log("Width x Height:", widthx, heighty)

const Body1 = () => (
    <div className="backdrop">
        <img src="images/webpage_backdrop_stars.png" alt="Stars" ></img>
        <div className="centered">
            Automation at Scale
        </div>
    </div>
);

const Body3 = () => (
    <div>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className="accordionHeaderDiv">
                        <Image className="accordionImage" src="images/SubjectMatter.png" />
                        <h1 className="accordionHeaderTitle">Subject Matter</h1>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="cards">
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Sensors</Card.Title>
                                <Card.Text>
                                    Sensors help us automate the perception of our environments. My work spans many sensor modalities. 
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Sensor Phenomenology</ListGroup.Item>
                                <ListGroup.Item>Sensor Fusion</ListGroup.Item>
                                <ListGroup.Item>Environmental Domains</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Stock Market Analysis</Card.Title>
                                <Card.Text>
                                    Predicting future price movement seems like a fool's errand. My analysis seeks to determine whether the "Efficient Markets Theory" is valid at short time scales.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Technical Analysis</ListGroup.Item>
                                <ListGroup.Item>Fundamental Analysis</ListGroup.Item>
                                <ListGroup.Item>News/Social Media Sentiment Analysis</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <div className="accordionHeaderDiv">
                        <Image className="accordionImage" src="images/Coding.png" />
                        <h1 className="accordionHeaderTitle">Coding Languages</h1>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="cards">
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Python</Card.Title>
                                <Card.Text>
                                    [Python Description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Useful Packages</ListGroup.Item>
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>C++</Card.Title>
                                <Card.Text>
                                    [C++ description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Useful Libraries</ListGroup.Item>
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>MATLAB</Card.Title>
                                <Card.Text>
                                    [MATLAB description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Bash/Batch</Card.Title>
                                <Card.Text>
                                    [Bash/Batch description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Javascript</Card.Title>
                                <Card.Text>
                                    [Javascript description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Useful Libraries</ListGroup.Item>
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <div className="accordionHeaderDiv">
                        <Image className="accordionImage" src="images/Environments.png" />
                        <h1 className="accordionHeaderTitle">Environments</h1>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="cards">
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Docker</Card.Title>
                                <Card.Text>
                                    [Docker description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>GitLab</Card.Title>
                                <Card.Text>
                                    [GitLab description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>AWS</Card.Title>
                                <Card.Text>
                                    [AWS description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Useful Services</ListGroup.Item>
                                <ListGroup.Item>Use Cases</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <div className="accordionHeaderDiv">
                        <Image className="accordionImage" src="images/Management.png" />
                        <h1 className="accordionHeaderTitle">Management & Certifications</h1>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="cards">
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Technical Lead</Card.Title>
                                <Card.Text>
                                    [TechLead description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Experience</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="cardUnit">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Project Manager</Card.Title>
                                <Card.Text>
                                    [PM description]
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tasks</ListGroup.Item>
                                <ListGroup.Item>Role</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
);

export { Body1, Body3 };
