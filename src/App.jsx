import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';

import './App.css'
import Aside_ from './components/Aside';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container ">
     

  
    <NavBar/>
    <Aside_/>


    </div>
  )
}

export default App
