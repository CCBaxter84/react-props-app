import { useState } from 'react'
import Child from './Child'

function Parent() {
  const [count, setCount] = useState(0)
  
  function handleClick() {
    setCount(count => count + 1)
  }

  return (
    <div className="card">
      <p>Count is {count}</p>
      <button onClick={handleClick}>
        Increment
      </button>
      {/* <p>Parent count is {count}</p>
      <Child  count={count}
              handleClick={handleClick}/> */}
    </div>
  )
}

export default Parent
