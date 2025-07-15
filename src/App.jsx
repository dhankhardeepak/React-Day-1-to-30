import Counter from "./components/Counter"
import Greeting from "./components/Greeting"
import Todo from "./components/Todo"

function App() {

  return (
    <>
      <h1 style={{textAlign:"center"}}>React Day 1 to 30</h1>
      <div>
        <h2 style={{textAlign:"center"}}>Project 1 - Counter APP</h2>
        <Counter />
      </div>
      <hr />
      <div style={{padding:"30px 0 50px"}}>
        <h2 style={{textAlign:"center"}}>Project 2 - Greeting APP</h2>
        <Greeting />
      </div>

      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Todo App</h2>
        <Todo />
      </div>
      
    </>
  )
}

export default App
