import { connect } from "react-redux"
import "./App.css"
import MemeForm from "./components/MemeForm"
import MemeList from "./components/memeList"

function App(props) {
  const { loading } = props
  console.log(props)
  return (
    <div className="App">
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          flexDirection: "column",
          width: "80%",
          maxWidth: "450px",
          border: ".2px solid #dfe3ee",
          borderRadius: "20px",
          backgroundColor: "#dfe3ee",
          boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginTop: "20px",
          }}
        ></div>
        <p
          style={{
            marginTop: "50px",
            backgroundColor: "#4267B3",
            FontFace: "Helvetica",
            fontSize: "2em",
            color: "#f7f7f7",
            fontWeight: "bolder",
          }}
        >
          Random Meme ID
        </p>
        <MemeForm />
        {loading ? <h3>loading</h3> : <MemeList />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(App)
