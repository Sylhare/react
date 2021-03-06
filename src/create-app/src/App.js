import logo from './resources/logo.svg';
import './App.css';
import TodoContainer from "./Components/Todo";
import Fetch from "./Components/Fetch";
import FetchApi from "./Components/FetchApi";
import FetchApiHooks from "./Components/FetchApiHooks";
import ListExample from "./Components/ListExample";
import Greetings from "./Components/Greetings";
import MyForm from "./Components/MyForm";
import Register from "./Components/Register";
import Forms from "./Material/Demo";
import Parent from "./Components/Parent";
import FunctionalComponent from "./Examples/FunctionalComponent";
import ClassComponent from "./Examples/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greetings />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <TodoContainer todos={[
        {
          title: 'todo1'
        },
        {
          title: 'todo2'
        }]}/>

      <Fetch url="/greetings"/>

      <FetchApi/>

      <FetchApiHooks/>

      <ListExample/>

      <MyForm />

      <Register />

      <Forms />

      <Parent/>

      <FunctionalComponent />

      <ClassComponent value={"props value"}/>

    </div>
  );
}

export default App;
