import React from 'react'
import classNames from 'classnames'

import InputError from './errors/InputError'
import validation from '../../utils/validation'

class TextInput extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: this.props.value,
      errorMessage: undefined,
      errorVisible: false,
      valid: this.props.valid
    }
  }

  async handleChange(e) {
    const data = await validation(this.state, this.props, e.target.value)
    this.setState(data)
  }

  render() {
    let errorClass = classNames('field', {
      'error': this.state.errorVisible
    })

    return (
      <div className={errorClass}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          placeholder={`Please enter ${this.props.label}`}
          className={this.props.className}
          onChange={this.handleChange}
          onBlur={this.handleChange}
          value={this.state.value}
          required={this.props.required}
          maxLength={this.props.maxLength}
          pattern={this.props.pattern}
        />

        <InputError
          visible={this.state.errorVisible}
          errorMessage={this.state.errorMessage}
        />
      </div>
    )
  }
}

export default TextInput
