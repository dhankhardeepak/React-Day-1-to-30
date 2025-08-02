import Accordion from "./components/Accordion"
import Character from "./components/Character"
import Counter from "./components/Counter"
import DropDown from "./components/DropDown"
import Faq from "./components/Faq"
import FetchUserData from "./components/FetchUserData"
import Greeting from "./components/Greeting"
import LiveSearchFilter from "./components/LiveSearchFilter"
import Rating from "./components/Rating"
import Tab from "./components/Tab"
import ToastContainer from "./components/ToastContainer"
import Todo from "./components/Todo"
import { accordionData } from "./components/Data/accordionData"
import Form from "./components/Form"
import ProgressBar from "./components/ProgressBar"
import CircularBar from "./components/CircularBar"

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
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Tabs</h2>
        <Tab />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Custom Dropdown</h2>
        <DropDown />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Toast Notification System</h2>
        <ToastContainer />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Star Rating</h2>
        <Rating />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Star Rating</h2>
        <Accordion data={accordionData} type={"multi"} />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Form Hook</h2>
        <Form />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Progress Bar</h2>
        <ProgressBar />
      </div>
      <hr />
      <div>
        <h2 style={{textAlign:"center"}}>Progress Bar</h2>
        <CircularBar />
      </div>
    </>
  )
}

export default App
