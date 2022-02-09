import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
// import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ComponentParent from './components/ComponentParent';
import NameList from './components/NameList';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleUpdateA from './components/LifeCycleUpdateA';
import RefsDemo from './components/RefsDemo';
import ErrorHandling from './components/ErrorHandling';
import ErrorBoundary from './components/ErrorBoundary';
import { ClickCounter } from './components/RenderProps/ClickCounter';
import HoverCount from './components/RenderProps/HoverCount';
import User from './components/RenderProps/User';
import Counter from './components/RenderProps/Counter';
import ComponentA from './components/ContextAPI/ComponentA';
import { UserProvider } from './components/ContextAPI/UserContext';

function App() {
  return (
    <div className="App">
      {/* context API */}
      <UserProvider value="Pramuditha">
        <ComponentA/>
      </UserProvider>

      {/* render props example */}
      {/* <Counter render={(count, incrementCount) => (
      <ClickCounter count={count} incrementCount={incrementCount}/>)}/>
      <Counter render={(count, incrementCount) => (
      <HoverCount count={count} incrementCount={incrementCount}/>)}/> */}

      {/* Render props baseline
      <ClickCounter/>
      <HoverCount/>
      <User render = {(isLogged) => isLogged ? 'Pramuditha' : 'Guest'}/> */}

      {/* HOC
       <ClickCounter/> */}

      {/* <ErrorBoundary>
        <ErrorHandling heroName="Batman"></ErrorHandling>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorHandling heroName="Superman"></ErrorHandling>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorHandling heroName="Joker"></ErrorHandling>
      </ErrorBoundary> */}
      
        {/* <RefsDemo></RefsDemo> */}
        {/* <LifeCycleUpdateA></LifeCycleUpdateA> */}
        {/* <LifeCycleA></LifeCycleA> */}
        {/* <Form></Form> */}
        {/* <NameList></NameList> */}
        {/* <ComponentParent/> */}
        {/* <EventBind></EventBind> */}
        {/* <Greet personName = 'Pramuditha' message = 'Welcome to React'></Greet> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message> */}
        {/* <Greet personName = "Pramuditha">
          <p>This is a child element</p>
          <button>Click me</button>
          </Greet>
        <Greet personName = "Niroshan"/>

        <Welcome name = "John"/>
        <Welcome name = "Cena"/> */}

    </div>
  );
}

export default App;
