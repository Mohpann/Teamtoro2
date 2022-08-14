import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import MattZilch from "../assets/img/fighters/MattZilch.png";
import Ariana from "../assets/img/fighters/ArianaShastri.jpg";
import Gina from "../assets/img/fighters/GinaSewell.jpg";
import Teddy from "../assets/img/fighters/TeddyMandala.jpg";
import Ismael from "../assets/img/fighters/IsmaelBoutaleb.jpg";
import Joan from "../assets/img/fighters/JoanBasilo.jpg";
import Malik from "../assets/img/fighters/Malik.jpg";
import Brandon from "../assets/img/fighters/Brandon.jpg";
import Tomas from "../assets/img/fighters/Tomas.jpg";

export const Fighters = () => {
    return (
    <Container style={{paddingTop: "6%"}}>
        <Row className="fighters">
            <Col>
                <Card className="fighter-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={MattZilch}/>
                            <Card.Body>
                                <Card.Title style={{color:'black', textAlign: "center"}}>Matt Zilch</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="fighter-card" style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={Teddy}/>
                            <Card.Body>
                                <Card.Title style={{color:'black', textAlign: "center"}}>Teddy Mandala</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="fighter-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ariana}/>
                            <Card.Body>
                                <Card.Title style={{color:'black', textAlign: "center"}}>Ariana Shastri</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                </Card>
            </Col>
        </Row>

        




        <Row className="fighters">
            <Col>
                <Card className="fighter-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ismael}/>
                            <Card.Body>
                                <Card.Title style={{color:'black', textAlign: "center"}}>Ismael</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="fighter-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Malik}/>
                            <Card.Body>
                                <Card.Title style={{color:'black', textAlign: "center"}}>Malik</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="fighter-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Brandon}/>
                            <Card.Body>
                                <Card.Title style={{color:'black', textAlign: "center"}}>Brandon</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}