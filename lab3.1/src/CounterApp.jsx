import React from 'react';
import StepCounter from './StepCounter';
export default function CounterApp() {
    return (
        <div>
            <h2>Task 1: Counter App</h2>
            <StepCounter initialValue={0} step={1} />
            <StepCounter initialValue={10} step={5} />
        </div>
    );
}