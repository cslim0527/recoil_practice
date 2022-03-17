import './styles.css'
import {useState} from "react";
import {atom, RecoilRoot, selector, useRecoilState, useRecoilValue} from "recoil";

const usernameState = atom({
    key: 'username',
    default: '홍길동'
})

const countState = selector({
    key: 'count',
    get: ({get}) => {
        const username = get(usernameState)
        return username.length
    }
})

function App() {
  return (
    <RecoilRoot>
        <Nav />
        <Body />
    </RecoilRoot>
  );
}

function Nav() {
    const username = useRecoilValue(usernameState)

    return (
        <nav>
            <h1>User: {username}</h1>
        </nav>
    );
}

function Body() {
    return (
        <div className={'contents'}>
            <Profile />
            <Count />
        </div>
    );
}

function Profile() {
    const [username, setUsername] = useRecoilState(usernameState)
    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div>
            <h2>Profile</h2>
            <p>{username || '이름을 입력해주세요.'}</p>
            <input type="text" value={username} onChange={handleChangeName}/>
        </div>
    );
}

function Count() {
    const count = useRecoilValue(countState)
    return (
        <div>
            <p>
                count: {count}
            </p>
        </div>
    );
}

export default App;
