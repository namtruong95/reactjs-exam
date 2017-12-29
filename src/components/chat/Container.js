// import React from 'react'
// import {connect} from 'react-redux'
// import {Route} from 'react-router-dom'

// import {getThreads} from '../../actions/thread'

// import Thread from './Thread'
// import History from './History'

// class Container extends React.Component {
//   constructor() {
//     super()

//     this.getThreads = this.getThreads.bind(this)
//   }

//   // componentDidMount() {
//   //   document.title = 'Container'
//   // }

//   async getThreads(e) {
//     e.preventDefault()
//     const threads = await getThreads()
//     console.log(threads, 1111)
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Thread />

//         <Route exact path="/threads/:id" component={History} />
//       </React.Fragment>
//     )
//   }
// }

// export default connect(function (state) {
//   return state
// })(Container)
