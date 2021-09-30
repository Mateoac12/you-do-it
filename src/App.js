import UserProvider from 'context/userContext'
import Routers from 'routers/routers'
import './App.css'
import './firebase/config'

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Routers />
      </UserProvider>
    </div>
  )
}

export default App
