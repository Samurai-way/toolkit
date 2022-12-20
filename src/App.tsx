import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    // const {count} = useAppSelector(state => state.userReducer)
    //
    // const increment = userSlice.actions.increment
    // const decrement = userSlice.actions.decrement
    //
    // const dispatch = useAppDispatch()
    //
    // const inc = () => {
    //     dispatch(increment(+1))
    // }
    //
    // const dec = () => {
    //     dispatch(decrement(count - 1))
    // }

    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    console.log(users)


    return (
        <div className="App">
            {isLoading && <h1>идёт загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {users.map(u => <ul key={u.id}>
                <li>{u.name}</li>
                <li>{u.email}</li>
            </ul>)}
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={inc}>inc</button>*/}
            {/*<button onClick={dec}>dec</button>*/}
        </div>
    );
}

export default App;
