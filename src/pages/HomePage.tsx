import React from 'react';
import {useSearchUsersQuery} from "../store/github/github.api";
import {useDebounce} from "../hooks/debouce";

const HomePage = () => {

    const [search, setSearch]= React.useState('')
    const [drop, setDrop] = React.useState(false)
    const debounced = useDebounce(search)
    const {isLoading, isError, data: users} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
    })


    React.useEffect(()=>{
        setDrop(debounced.length > 3 && users?.length! > 0)
    },[debounced, users])

    return (
        <div>
            {isError && <span>ссори, ошибка</span>}
            <div>
                <input
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}
                    placeholder={'Search for Github username...'}
                    type={'text'}/>
            </div>

            {drop && <ul>
                {isLoading && <span>loading...</span>}
                {users?.map(u => (
                    <li key={u.id}>{u.login}</li>
                ))}
            </ul>}
        </div>
    );
};

export default HomePage;