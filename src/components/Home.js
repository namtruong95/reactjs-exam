import React from 'react'
import {connect} from 'react-redux'
import {getThreads} from '../actions/thread'
import {Route} from 'react-router-dom'
import Header from './Header'
import Thread from './Thread'

class Home extends React.Component {
  constructor() {
    super()

    this.getThreads = this.getThreads.bind(this)
  }

  componentDidMount() {
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
        <Header />
        <h1>Home</h1>
        <button className='ui button primary' onClick={this.getThreads}>get Threads</button>

        <Route path="/threads/:id" component={Thread} />
      </React.Fragment>
    )
  }
}

export default connect(function (state) {
  return state
})(Home)
