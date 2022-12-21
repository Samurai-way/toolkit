import React from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import {useDebounce} from "../hooks/debouce";

const HomePage = () => {

    const [search, setSearch] = React.useState('')
    const [drop, setDrop] = React.useState(false)
    const debounced = useDebounce(search)
    const {isLoading, isError, data: users} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

    React.useEffect(() => {
        setDrop(debounced.length > 3 && users?.length! > 0)
    }, [debounced, users])

    const clickHanler = (username: string) => {
        console.log(username)
    }

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
                    <li
                        onClick={() => clickHanler(u.login)}
                        key={u.id}>{u.login}</li>
                ))}
            </ul>}

            <div>
                {areReposLoading && <p>Repos are loading...</p>}
            </div>
        </div>
    );
};

export default HomePage;