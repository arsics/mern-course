import React from 'react';
import './NewGoal.css';

const NewGoal = props => {

    const addGoalHandler = event  => {
        event.preventDefault(); // don't send the event to a backend

        // get the user's input (currently mocked)
        const newGoal = {
            id: Math.random().toString(),
            text: 'New goal!'
        };

        // notify the parent (call his callback function)
        props.onAddGoal(newGoal);
    };

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" />
            <button type="submit">Add goal</button>
        </form>
    );
};

export default NewGoal;
