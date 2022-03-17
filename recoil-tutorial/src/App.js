import './styles.css'

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
    return (
        <div>
            <h2>Profile</h2>
            <p>임찬수</p>
            <input type="text"/>
        </div>
    );
}

export default App;
