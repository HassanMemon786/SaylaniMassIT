import React from 'react';
// import firebase from './config/firebase.js';
import './App.css';


// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       todos: [{title: "Hassan", edit: false}, {title: "Hannan", edit: false}],
//       value: ""
//     }

//   }

//   add_todo = () => {
//     // this.state.todos.push(this.state.value);
//     let obj = {title: this.state.value};
//     firebase.database().ref('/').child("todos").push(obj);
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value : ""
//     })
//   }

//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos
//     })
//   }

//   edit_todo = (index, value) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos
//     })
//   }

//   handleChange = (e, index) => {
//     this.state.todos[index].title = e.target.value
//     this.setState({
//       todos: this.state.todos
//     })
//   }

//   update = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   render() {
//     let {todos, value} = this.state;
//   return (
//     <div>
//       <input value={value} onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder="Enter Value" />
//       <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i) => {
//             return <li key={i}>{v.edit ? <input value={v.title} type="text" onChange={(e) => this.handleChange(e,i)}/> : v.title}
//             {v.edit ? <button onClick={() => {this.update(i)}}>Update</button>
//             :
//             <button onClick={() => this.edit_todo(i, v.title)}>Edit</button>
//             } 
//             <button onClick={() => this.delete_todo(i)}>Delete</button>
//             </li>
//           })}
//         </ul>
//     </div>
    
//   );
// }
// }

// export default App;

import AppRouter from './config/router';
class App extends React.Component {
  render(){
    return(
      <AppRouter />
    )
  }
}


export default App;