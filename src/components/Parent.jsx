import { useState } from 'react'

function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <p>Parent count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Parent
