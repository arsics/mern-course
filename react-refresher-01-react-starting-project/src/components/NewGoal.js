import React from 'react';
import './NewGoal.css';

const NewGoal = props => {

    let enteredText = '';

    const addGoalHandler = event  => {
        event.preventDefault(); // don't send the event to a backend

        // get the user's input (currently mocked)
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        // notify the parent (call his callback function)
        props.onAddGoal(newGoal);
    };

    const textChangeHandler  = event => {
        enteredText = event.target.value;
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" onChange={textChangeHandler} />
            <button type="submit">Add goal</button>
        </form>
    );
};

export default NewGoal;
