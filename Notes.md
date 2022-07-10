## React JS Crash Course

React is a library for building user interfaces.

React runs on the client as a SPA(Single Page Application), but can be used to build full stack apps by communicating with a server/API.

Allow us structure the view layer of our application.

Reusable components with their own state.

JSX - Dynamic markup.

Interactive UIs with Virtual DOM 

Performance & testing.

Components render/ return JSX (JavaScript Syntax Extension)

Components have state, which is an  object that determines how a component renders and behaves.

Now we can use functional components with hooks

React hooks: functions that let us hook into the React state and lifecycle features from function components. Commonly used:
- useState
- useEffect
- useContext
- useReducer
- useRef

Run react app

```React
npm start 
```

## If we don´t want to add a div to envolve the JSX code, we can do:

```jsx

function App() {
  return (
    <>
      <h1>Hello from react</h1>
    </>
  );
}

export default App;

```
## Create an arrow function with component jsx code, with React extension on VSC
```jsx
rafce
```

## Components can be defined as a function or class

```jsx
import Header from './components/Header'
function App() {
  const name = 'Laura'
  const x = true
  return (
    <div className="container">
      <Header/>
      <h1>Hello {name} from react</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App
```

```jsx
import Header from './components/Header'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <h1>Hello from class</h1>
      </>
    )
  }
}

export default App;
```

## Set styles inside tags directly

```jsx
import PropTypes from 'prop-types'


const Header = ({ title }) => {
  return (
    <header>
        <h1 style={{color: 'blue', backgroundColor: 'pink'}}>
            {title}
        </h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header

```

## Also we can set styles inside of a constant, the result will be the same of course

```jsx
import PropTypes from 'prop-types'


const Header = ({ title }) => {
  return (
    <header>
        <h1 style={headingStyle}>
            {title}
        </h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'blue', 
    backgroundColor: 'pink'
}

export default Header


```
