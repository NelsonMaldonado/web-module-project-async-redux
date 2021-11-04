import React from "react"
import axios from "axios"

class MemeList extends React.Component {
  state = { memes: [] }

  componentDidMount() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        console.log(res.data.data.memes)
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
        <button onClick={this.randomMeme}>Random Meme</button>
        {console.log(this.state.memes)}
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
        {console.log(this.state.memes[2])}
      </div>
    )
  }
}

export default MemeList
