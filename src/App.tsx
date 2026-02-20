import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import catPhoto from "./catExamplePhoto.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World! Liam Bast UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>This is needed for a test</h1>
            Top 3 Days of the Week:
            <ul>
                <li>Saturday</li>
                <li>Friday</li>
                <li>Sunday</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col
                        style={{
                            border: "1px solid red",
                            padding: "4px",
                            backgroundColor: "red",
                        }}
                    >
                        To the right is a photo of a cat
                    </Col>
                    <Col
                        style={{
                            border: "1px solid red",
                            padding: "4px",
                            backgroundColor: "red",
                        }}
                    >
                        <img
                            src={catPhoto}
                            alt="A photo of a cat"
                            className="small-image"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
