import React, { Component } from "react"
import { getThreads } from '../actions/thread'

export default class Home extends Component {
  constructor() {
    super()
    document.title = 'Home'
  }

  async getThreads(e) {
    e.preventDefault()
    const threads = await getThreads()
    console.log(threads, 1111)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <button onClick={this.getThreads}>get Threads</button>
      </React.Fragment>
    )
  }
}
