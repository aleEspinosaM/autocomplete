### 1. What is the difference between Component and PureComponent? give an
```
pureComponent and component is an old way to create performance in class based components, back in the day when we did not have hooks, we used purcomponent, what it does, is skips re renders when state an props are the same, alsmot as the life cicle hook  should component update,

it can break the app doing weird renders
```



### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

```
Its being a long time since i used class components, but something i can remember is over optimization, would be hard to debug changes,

also i remember when context was first introduce, it was not recommend to use in class components
```

### 3. Describe 3 ways to pass information from a component to its PARENT.
```
1: passing a callback function to child to update parent, this is really common

2: Using some sort of state manager, such as redux, we can dispatch actions from every place

3: using context, we can get all the setters and update the parent

4: using render patterns such renderProp, renderChildren
```

### 4. Give 2 ways to prevent components from re-rendering.

```
1: using useMemo, useCallback or Memo, for fn components
2: doing shallow comparison to props, or just doing presentational components
```
### 5. What is a fragment and why do we need it? Give an example where it might

```
  fragments allow to pass multiple children to a JSX tag
  <>
    <p>
    <p>
  </>

  React can handle an array of childrens, in the same jsx tag, so we need a way to stop adding useless divs, to only wrap siblings
```

### 6. Give 3 examples of the HOC pattern.
```
  this Pattern is really old and not recommended a lot as it is hard to track where do pass props or extra state, there are other solutions now a days like renderProps pattern or hooks,

  old redux uses connector,
  old react router uses withRouter to pass history and lcoation props

  we can create a withAuth to pass neccesary tokens
```
### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

```
  Callbacks

  for callbacks is commmong to check if the error exist and then call the callback

  Promises

  we can either chain a catch statement, or pass a second parament to then method

  async/await

  we do use try catch block, which reminds of java a lot
```

### 8. How many arguments does setState take and why is it async.

```
  all state updates are async as the event is one thread only, 
  setState uses (prevState, props) => stateChange,

  and the feature i miss the most from setState, is the callback function,

  this is really handy when you want to do something when the state finished update

  setState((_, () => {
    // you can use the latest state in here
  }))
```
### 9. List the steps needed to migrate a Class to Function Component.
```
  remove this.state and constructor properties
  remove all lyfecicle handlers and try to sync them with useEffect or onUserHandlers

  derive the right data

  remove render method and just return jsx

```
### 10. List a few ways styles can be used with components.
```
  this depends on the project but you can import the styles and set classnames, you can use css modules,
  you can use many of css-in-js solutions
  or my personal fave tailwind for the win
```
### 11. How to render an HTML string coming from the server.

```
  if we make sure the string is sanitzed we could use dangerouslySetInnerHtml, which is not recommend to over use
```