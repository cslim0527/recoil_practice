import './styles.css'
import {useState} from "react";
import {atom, RecoilRoot, useRecoilState, useRecoilValue} from "recoil";

const usernameState = atom({
    key: 'username',
    default: '홍길동'
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

export default App;
