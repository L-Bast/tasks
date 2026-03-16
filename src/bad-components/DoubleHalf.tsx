import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    value,
    setValue,
}: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    value;
    return (
        <Button
            onClick={() => {
                setValue((v) => 2 * v);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    value,
    setValue,
}: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    value;
    return (
        <Button
            onClick={() => {
                setValue((v) => 0.5 * v);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}
