import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, changeAttemptsLeft] = useState<number>(3);
    const [requestedA, changeRequested] = useState<number>(0);

    return (
        <div>
            <h1>Number of Attempts Left: {attemptsLeft}</h1>
            <Form.Group controlId="forYesorNo">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedA}
                    onChange={(event) => {
                        changeRequested(parseInt(event.target.value) || 0);
                    }}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    changeAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    changeAttemptsLeft(attemptsLeft + requestedA);
                }}
                disabled={requestedA === 0}
            >
                gain
            </Button>
            <h3>Give Attempts</h3>
        </div>
    );
}
