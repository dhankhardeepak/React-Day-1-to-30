import Counter from "./components/Counter"
import Greeting from "./components/Greeting"

function App() {

  return (
    <>
      <h1 style={{textAlign:"center"}}>React Day 1 to 30</h1>
      <div>
        <h2 style={{textAlign:"center"}}>Project 1 - Counter APP</h2>
        <Counter />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Project 2 - Greeting APP</h2>
        <Greeting />
      </div>
    </>
  )
}

export default App
