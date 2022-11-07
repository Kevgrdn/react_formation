import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import Heroes from './pages/Heroes'

function App() {
  const [ visible, setVisible] = useState(true)

  return (
    <>
      <Counter />
      <button className="rounded-xl bg-blue-500 p-2" onClick={() => setVisible(v => !v)}>Show/Hide Heroes</button>
      {visible && <Heroes />}
    </>
  )
}

export default App
