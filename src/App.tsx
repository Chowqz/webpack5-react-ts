import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { add } from './util'

const App = () => {
  const [count, setCount] = useState(0)

  console.log(add(1, 2))
  console.log(add(2, 3))

  return (
    <div>
      <div className="title" style={{ width: '100px' }} onClick={() => 2}>
        App index
      </div>
      <input type="text" />
      <Home count={count} />
      <button onClick={() => setCount(prev => prev + 1)}>add</button>
      <div style={{ color: 'red' }}>369</div>
    </div>
  )
}

export default App
