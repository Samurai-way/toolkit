import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/userSlice";

function App() {
    const {count} = useAppSelector(state => state.userReducer)

    const increment = userSlice.actions.increment
    const decrement = userSlice.actions.decrement

    const dispatch = useAppDispatch()

    const inc = () => {
        dispatch(increment(+1))
    }

    const dec = () => {
        dispatch(decrement(count - 1))
    }
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
}

export default App;
