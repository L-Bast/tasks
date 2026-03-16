import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    let aplhaHolidays: string[] = ["🎄", "🐇", "🎃", "☘️", "🎆"];
    let yearHolidays: string[] = ["☘️", "🐇", "🎆", "🎃", "🎄"];
    const [holiday, changeHoliday] = useState<string>("🎄");

    function alphaOrder(currentHoliday: string): string {
        const index = aplhaHolidays.indexOf(currentHoliday);
        return aplhaHolidays[(index + 1) % aplhaHolidays.length];
    }

    function yearOrder(currentHoliday: string): string {
        const index = yearHolidays.indexOf(currentHoliday);
        return yearHolidays[(index + 1) % yearHolidays.length];
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>

            <Button
                onClick={() => {
                    changeHoliday(alphaOrder(holiday));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    changeHoliday(yearOrder(holiday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
