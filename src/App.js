import React, {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './Actions/Index';

function App() {

//EX mapToProps
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)

//EX dispatchToProps
  const dispatch = useDispatch()

  const user = {name: 'Pablo'}


  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])


  return (
    <div className="App">
      {
        currentUser.loggedIn ?
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>LogOut</button>
        </>
        :
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login</button>
        </>
      }
        <h1>Counter: {counter}</h1>
        <button onClick = { () => dispatch(allActions.counterActions.decrement())}>Decrease</button>
        <button onClick = { () => dispatch(allActions.counterActions.increment())}>Increase</button>
      
    </div>
  );
}

export default App;
