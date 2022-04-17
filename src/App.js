// import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn.js';
import SignUp from './components/signup.js';
import ToDo from './components/todo.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js';
function App() {
  const [pageName , setPageName] = useState('');
  const changePage = (name) => {
    setPageName(name);
  }
  return (
    <div className="App container-fluid">
      <Navbar changePage={changePage}/>
      {pageName === "signin" ?  <SignIn /> : ""}
      {pageName === "signup" ?  <SignUp /> : ""}
      {pageName === "todo"   ?  <ToDo />: ""}
    </div>
  );
}

export default App;
