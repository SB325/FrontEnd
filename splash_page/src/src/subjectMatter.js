import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './subjectMatter.css';
import { smdata, codedata, envdata, trdata } from './splashdata'
//import ListGroup from 'react-bootstrap/ListGroup';

const SubjectMatter = () => {

    const [smValues, setsmValues] = useState(
        [ smdata, codedata, envdata, trdata ]
    );

    return (
        <div>
            {
                smValues.map((smValue) => (
                    <div>
                        <div className="majorDivBlock">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1>{smValue[0].header}</h1>
                            <p>{smValue[0].descrip}</p>
                        </div>
                        <div className="cards">
                            {
                                smValue[1].map((smVal) => (
                                    <Card className="cardUnit">
                                        <Card.Img src={smVal.childimage} 
                                            alt="Image"/>
                                        <Card.ImgOverlay>
                                            <Card.Body>
                                                <Card.Title>{smVal.cardHeaderName}</Card.Title>
                                                <Card.Text>{smVal.content}</Card.Text>
                                            </Card.Body>
                                        </Card.ImgOverlay>
                                        <Accordion>{
                                            smVal.dropdowns.map((dropdown) => (
                                                <Accordion.Item eventKey={dropdown.iter}>
                                                    <Accordion.Header>{dropdown.msg}</Accordion.Header>
                                                    <Accordion.Body>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))
                                            }
                                            cnt=0
                                        </Accordion>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default SubjectMatter
