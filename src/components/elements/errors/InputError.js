import React from 'react'
import classNames from 'classnames'

class InputError extends React.Component {
  render(){
    let className = classNames('ui mini pointing red basic label', {
      'hidden': !this.props.visible
    })

    return (
      <div className={className}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
}

export default InputError
