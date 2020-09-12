import React, { Component } from 'react';
import CoursForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {
  
  state ={
    courses:[
      {name: "HTML"},
      {name: "CSS"},
      {name: "JQuery"},
    ]
  }

  render() {
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CoursForm />
        <CourseList />
      </section>
    );
  }
}
export default App;
