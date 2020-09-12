import React, { Component } from 'react';
import CoursForm from './components/CourseForm';
import CourseList from './components/CourseList'

class App extends Component {

  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JQuery" },
    ]
  }

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} />
    })
    return (
      <section className="App">

        <h2>Add Course</h2>
        <CoursForm />
        <ul>
          {courseList}
        </ul>
      </section>
    );
  }
}
export default App;
