
import { MainRouter } from './routing/MainRouter'
import './App.css'
import { Auth } from './components/pages/Auth'
import { useCookies } from 'react-cookie';

function App() {
const [cookies]=useCookies()
const authToken = cookies.AuthToken;
//const userEmail = cookies.Email;
  return (
    
    <div className='App'>
     {!authToken && <Auth/>}
     {authToken && <MainRouter/>} 
    
    </div>
  )
}

export default App
