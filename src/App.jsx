import { useState } from 'react'
import './App.css'
import Authorization from './Pages/Authorization.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Authorization/>
    </div>
  )
}

export default App
