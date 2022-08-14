import { Container, Row, Col } from "react-bootstrap";

export const Schedule = () => {
    const customTable = {
        margin: 'auto',
        width: '60%',
        padding: '50px',
    }
    const background = {
        backgroundColor: "rgb(83, 83, 83, 0.5)",
        padding: "100px"
    }

    return (
    <Container style={{paddingTop: "6%"}}>
    <div style={background}>
        <h2>Schedule of Classes</h2>
            <Row>
                <Col>
                    <table style = {customTable}>
                        <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                        </tr>

                        <tr>
                        <td>9:00am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className = "green">Kids Class</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>10:00am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className = "green"> Mixed Levels Muay Thai</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>11:30am</td>
                        <td></td>
                        <td className = "green"> All Levels Muay Thai</td>
                        <td></td>
                        <td className = "green"> All level Muay Thai</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>5:00pm</td>
                        <td className = "green"> Kids Class</td>
                        <td className = "green"> Kids Class</td>
                        <td className = "green"> Kids Class</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>6:00pm</td>
                        <td className = "green"> Beginners Muay Thai</td>
                        <td className = "green"> Beginners Muay Thai</td>
                        <td className = "green"> Beginners Muay Thai</td>
                        <td className = "green"> Beginners Muay Thai</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>7:00pm</td>
                        <td className = "green"> Advanced Muay Thai</td>
                        <td className = "green"> Advanced Muay Thai</td>
                        <td className = "green"> Advanced Muay Thai</td>
                        <td className = "green"> Advanced Muay Thai</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                    </table>
                </Col>
            </Row>    
        </div>
    </Container>
    )
}