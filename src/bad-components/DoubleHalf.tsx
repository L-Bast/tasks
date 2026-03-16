import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getDhValue, setDhValue } from "./DoubleHalf.test";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * getDhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * getDhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{getDhValue()}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
