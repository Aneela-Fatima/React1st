import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  const addValue = () => {
    setCount(prev => (prev < 20 ? prev + 1 : prev))
}

  const removeValue = () => {
    setCount(prev => (prev > 0 ? prev - 1 : prev))
}


  return (
    <>
      <h1>Learning React with 2nd project.</h1>
      <h2>Counter value: {count}</h2>

      <button
      onClick={addValue}
      >Add value {count}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
