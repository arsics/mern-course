import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = props => {

    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event  => {
        event.preventDefault(); // don't send the event to a backend

        // get the user's input (currently mocked)
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        // notify the parent (call his callback function)
        props.onAddGoal(newGoal);
        setEnteredText('');
    };

    const textChangeHandler  = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">Add goal</button>
        </form>
    );
};

export default NewGoal;
