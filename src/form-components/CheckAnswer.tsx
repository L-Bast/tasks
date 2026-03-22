import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userA, updateA] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="forYesorNo">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={userA}
                    onChange={(event) => {
                        updateA(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <h3>Check Answer</h3>
            {expectedAnswer === userA ? "✔️" : "❌"}
        </div>
    );
}
