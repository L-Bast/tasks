import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, changeNum] = useState<number>(4);
    const [inProgress, changeProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                disabled={inProgress || numAttempts === 0}
                onClick={() => {
                    changeNum(numAttempts - 1);
                    changeProgress(true);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    changeProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    changeNum(numAttempts + 1);
                }}
            >
                Mulligan
            </Button>
            {<div> Number of attempts: {numAttempts}</div>}
        </div>
    );
}
