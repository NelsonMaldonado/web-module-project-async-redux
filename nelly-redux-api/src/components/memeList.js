import React from "react"
import axios from "axios"

class MemeList extends React.Component {
  state = {
    memes: [],
    i: [],
    newObj: "",
  }

  componentDidMount() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        // console.log(res.data.data.memes)
        this.setState({
          memes: res.data.data.memes,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            const idx = Math.floor(Math.random() * 100)
            console.log(idx)

            // this.setState({ i: idx })
            this.setState({ newObj: this.state.memes[idx] })

            return idx
          }}
        >
          Random Meme
        </button>
        {console.log(this.state.newObj)}
        <div>
          <h2>{this.state.newObj.name}</h2>
        </div>
        <img
          width="300px"
          src={this.state.newObj.url}
          alt={this.state.memes.id}
        />

        {/* {this.state.memes.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <div style={{ marginBottom: "20px" }}>
                {<img src={item.url} width="200px" />}
              </div>
            </div>
          )
        })} */}
        {/* {console.log(this.state.memes[this.state.i])} */}
      </div>
    )
  }
}

export default MemeList
