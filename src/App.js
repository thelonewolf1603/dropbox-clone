import './App.css';
import { Homepage } from './components/homepage';
import { Login } from './components/login';
import * as React from 'react'

function App() {

  const [user, setUser] = React.useState(null)

  const setCurrentUser = (user) => {
    setUser(user)
  }

  return (
    <div className="App" style={{backgroundImage: require("./media/background-blue-wall-texture-abstract-grunge-ruined-scratched-49417732.webp")}}>
      {!user ? <Login setCurrentUser={setCurrentUser} /> : <Homepage user = {user}/>}
    </div>
  );
}

export default App;
