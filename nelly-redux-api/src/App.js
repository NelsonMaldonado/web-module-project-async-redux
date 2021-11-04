import "./App.css"
import MemeList from "./components/memeList"

function App() {
  return (
    <div className="App">
      <h1>Random Meme Generator</h1>
      <form>
        <input placeholder="number from 1-100" />
        <button>enter number</button>
      </form>
      <MemeList />
    </div>
  )
}

export default App
