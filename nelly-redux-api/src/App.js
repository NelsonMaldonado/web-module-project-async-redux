import { connect } from "react-redux"
import "./App.css"
import MemeForm from "./components/MemeForm"
import MemeList from "./components/memeList"

function App(props) {
  const { loading } = props
  console.log(props)
  return (
    <div className="App">
      <h1>Random Meme Generator</h1>
      <MemeForm />
      {loading ? <h3>loading</h3> : <MemeList />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(App)
