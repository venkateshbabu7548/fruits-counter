// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  EatMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: mango + 1}))
  }

  EatBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="down">
            <div className="img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button onClick={this.EatMango}>Eat Mango</button>
              </div>
            </div>
            <div className="img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button onClick={this.EatBanana}>Eat Banana</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
