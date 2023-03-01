import './Body.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Body1 = () => (
    <div className="backdrop">
        <img src="images/webpage_backdrop_stars.png" alt="Stars" ></img>
        <div className="centered">
            Automation at Scale
        </div>
    </div>
);

const SubjectMatter = () => (
    <div className="majorDivBlock">
        <h1>Subject Matter</h1>
        <p>The lazy fox jumps over the quick dog</p>
        <div className="cards">
            <Card className="cardUnit">
                <Card.Img src="images/radar_radar_equipment_navigation.jpg" 
                    alt="Sensor Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Sensors</Card.Title>
                        <Card.Text>
                            Sensors help us automate the perception of our environments. My work spans many sensor modalities. 
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sensor Phenomenology</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Sensor Fusion</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Environmental Domains</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images/analysis_trading_forex_515243.jpg"
                    alt="Stock Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Stock Market Analysis</Card.Title>
                        <Card.Text>
                            Predicting future price movement seems like a fool's errand. My analysis seeks to determine whether the "Efficient Markets Theory" is valid at short time scales.
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Technical Analysis</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Fundamental Analysis</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>News/Social Media Sentiment Analysis</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    </div>
);

const Code = () => (
    <div className="majorDivBlock">
        <h1>Code</h1>
        <p>The lazy fox jumps over the quick dog</p>
        <div className="cards">
            <Card className="cardUnit">
                <Card.Img src="images/python_png.png" 
                alt="Python Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Python</Card.Title>
                        <Card.Text>
                            [Python Description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Useful Packages</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Use Cases</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\hello_world_c_png.jpg" 
                alt="C++ Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>C++</Card.Title>
                        <Card.Text>
                            [C++ description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Useful Libraries</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Use Cases</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\matlab_logo_png.jpg" 
                alt="Matab Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>MATLAB</Card.Title>
                        <Card.Text>
                            [MATLAB description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <ListGroup className="mt-auto">
                    <ListGroup.Item>Use Cases</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\programming_html_code_coding.jpg"
                alt="Batch Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Bash/Batch</Card.Title>
                        <Card.Text>
                            [Bash/Batch description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <ListGroup className="mt-auto">
                    <ListGroup.Item>Use Cases</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\code_coding_web_development.jpg" 
                alt="Javascript Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Javascript</Card.Title>
                        <Card.Text>
                            [Javascript description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Useful Libraries</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Use Cases</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    </div>
);

const Environments = () => (
    <div className="majorDivBlock">
        <h1>Environments</h1>
        <p>The lazy fox jumps over the quick dog</p>
        <div className="cards">
            <Card className="cardUnit">
                <Card.Img src="images\docker.png" />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Docker</Card.Title>
                        <Card.Text>
                            [Docker description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <ListGroup className="mt-auto">
                    <ListGroup.Item>Use Cases</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\gitlab.png" 
                alt="Gitlab Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>GitLab</Card.Title>
                        <Card.Text>
                            [GitLab description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <ListGroup className="mt-auto">
                    <ListGroup.Item>Use Cases</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\aws.png" 
                alt="AWS Image"/>
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>AWS</Card.Title>
                        <Card.Text>
                            [AWS description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Useful Services</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Use Cases</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    </div>
);

const TeamRoles = () => (
    <div className="majorDivBlock">
        <h1>Team Roles</h1>
        <p>The lazy fox jumps over the quick dog</p>
        <div className="cards">
            <Card className="cardUnit">
                <Card.Img src="images\techlead.jpg" />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Technical Lead</Card.Title>
                        <Card.Text>
                            [TechLead description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <ListGroup className="mt-auto">
                    <ListGroup.Item>Experience</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className="cardUnit">
                <Card.Img src="images\pm.png" />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Project Manager</Card.Title>
                        <Card.Text>
                            [PM description]
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tasks</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Role</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    </div>
);

export { Body1, SubjectMatter, Code, Environments, TeamRoles };
