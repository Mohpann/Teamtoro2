import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import MattZilch from "../assets/img/fighters/MattZilch.png";
export const Fighters = () => {
    return (
    <Container>
        <Row>
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
        </Row>
    </Container>
    )
}