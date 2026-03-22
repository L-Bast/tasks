import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    label={color}
                    name="color-group"
                    value={color}
                    checked={selectedColor === color}
                    onChange={(e) => {
                        setSelectedColor(e.target.value);
                    }}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                    width: "200px",
                    textAlign: "center",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
