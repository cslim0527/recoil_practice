import './styles.css'
import {useState} from "react";

function App() {
  return (
    <div className="App">
        <Nav />
        <Body />
    </div>
  );
}

function Nav() {
    return (
        <nav>
            Navigation
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
    const [username, setUsername] = useState('임찬수')

    return (
        <div>
            <h2>Profile</h2>
            <p>{username || '이름을 입력해주세요.'}</p>
            <input type="text" value={username} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
        </div>
    );
}

export default App;
