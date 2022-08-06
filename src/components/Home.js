import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import pic1 from '../assets/img/pic1.jpg';
import pic2 from '../assets/img/pic2.jpg';
import pic3 from '../assets/img/pic4.jpg';
import pic31 from '../assets/img/pic31.jpg';
import banner42 from '../assets/img/banner42.png';
import muaythai1 from '../assets/img/muaythai1.png'
import muaythai2 from '../assets/img/muaythai2.png'
import runner from '../assets/img/runner.png'
import DescriptionImage from '../assets/img/DescriptionImg.png'

export const Home = () => {
    return (
        <div className="Home">
            <Carousel variant = "dark" style = {{paddingTop: "4.2%"}}>
                <Carousel.Item>
                    <Image
                        fluid = "true"
                        src={pic1}
                        alt="First slide"
                    />
                        <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                            <h3>Illinois Premier Muay Thai Gym</h3>
                        </Carousel.Caption>
                </Carousel.Item>
                    
                <Carousel.Item>
                <Image
                    fluid = "true"
                    src={pic2}
                    alt="Second slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Get in Great Shape and Reach Your Fitness Goals</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <Image 
                    fluid = "true"
                    src={pic3}
                    alt="Third slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Learn Self Defense</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <Image
                    fluid = "true"
                    src={pic31}
                    alt="Fourth slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Train and Fight With a World-Class Team</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <Image
                    fluid = "true"
                    src={banner42}
                    alt="Fifth slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Kids Classes Offered</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <Row className ="post-gallery">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={muaythai1}/>
                            <Card.Body>
                                <Card.Title>Competition</Card.Title>
                                <Card.Text>
                                Are you looking to test yourself in competition? Train with world class professional and amateur fighters at Team Toro.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={muaythai2}/>
                            <Card.Body>
                                <Card.Title>Strength</Card.Title>
                                <Card.Text>
                                Build your strength and confidence through the art of Muay Thai.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={runner}/>
                            <Card.Body>
                                <Card.Title>Conditioning</Card.Title>
                                <Card.Text>
                                Let us help you meet your fitness goals, whether it is weight-loss or overall wellness improvement we can help you out!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
                
                <Row className ="post-gallery">
                    <Col>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={DescriptionImage}/>
                                <Card.Body>
                                    <Card.Text>
                                    Are you looking to test yourself in competition? Train with world class professional and amateur fighters at Team Toro.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col>
                        <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                        Not convinced? Watch a few of our highlights!
                                        </Card.Text>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/64wZSqpuLmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RMLqsqMNdeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                    </Col>
                </Row>
            </div>
        </div>
    )
}