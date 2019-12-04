import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn course topic'},
    {id: 'cg3', text: 'Help other students in Q&A'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals gets the updated object by modifying the previous state object:
    // (reccommended approach if your state update depends on the previous state)
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
    // if it does not depend on the prevoius state simpler version can be used:
    // setCourseGoals(courseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  )
};

export default App;
