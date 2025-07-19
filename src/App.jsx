import Character from "./components/Character"
import Counter from "./components/Counter"
import Faq from "./components/Faq"
import FetchUserData from "./components/FetchUserData"
import Greeting from "./components/Greeting"
import LiveSearchFilter from "./components/LiveSearchFilter"
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
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Character Count</h2>
        <Character />
      </div>
      <hr />
      <div>
        <h2>Delay fetching User Data</h2>
        <FetchUserData />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Live Search Filter</h2>
        <LiveSearchFilter />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>FAQ's Accordion</h2>
        <Faq />
      </div>
    </>
  )
}

export default App
