import React from 'react'

class Company extends React.Component {
  componentDidMount() {
    document.title = 'Company'
  }

  render() {
    return (
      <React.Fragment>
        <h1>Company</h1>
      </React.Fragment>
    )
  }
}

export default Company
