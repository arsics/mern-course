import React from 'react';
import './App.css';
import GoalList from './components/GoalList';

const App = () => {

  const courseGoals = [
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn course topic'},
    {id: 'cg3', text: 'Help other students in Q&A'},
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  )
};

export default App;
