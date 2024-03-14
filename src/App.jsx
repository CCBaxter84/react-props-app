import reactLogo from './assets/react.svg'
import './App.css'
import Parent from './components/Parent'

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React</h1>
      <Parent />
    </>
  )
}

export default App
