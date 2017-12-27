import React from 'react'
import { getThreads } from '../actions/thread'

class Home extends React.Component {
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
        <button className='ui button primary' onClick={this.getThreads}>get Threads</button>
      </React.Fragment>
    )
  }
}

export default Home
