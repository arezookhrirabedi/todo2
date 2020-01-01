import React from 'react';
import StudentRate from './StudentRate';

class App extends React.Component {
  studentList: {
    name: string;
    rate: number;
    age: number;
  }[] = [
      { name: "taghi", rate: 17, age: 32 },
      { name: "mahdi", rate: 2, age: 40 }
    ];

  detail(item: { name: string; rate: number; age: number }, index: number) {
    return <li key={index} className="kk">{item.name + " " + item.age + ' ' + item.rate}</li>
  }


  render() {
    return (
      // <StudentRate />
      <ul className="wrapper">
        {this.studentList.map(this.detail)}
      </ul>
    )
  }
}
export default App;
