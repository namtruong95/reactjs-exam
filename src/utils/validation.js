import isEmpty from 'lodash/isEmpty'
import {Pattern} from './Pattern'

const validation = (state, props, value) => {
  let errorMessage = ''
  let errorVisible = false
  let valid = false

  if (props.required && isEmpty(value)) {
    errorMessage = `Please enter ${props.label}`
    errorVisible = true
    valid = true
  }
  else if (props.minLength && value.length < props.minLength) {
    errorMessage = `Password length must be at least ${props.minLength} characters`
    errorVisible = true
    valid = true
  }
  else if (props.pattern && !Pattern[props.pattern].test(value)) {
    errorMessage = `Please enter a valid ${props.label}`
    errorVisible = true
    valid = true
  }
  else if (props.maxLength && value.length > props.maxLength) {
    errorMessage = `Please enter within ${props.label} characters in half size`
    errorVisible = true
    valid = true
  } else {
    errorMessage = undefined
    errorVisible = false
    valid = false
  }

  return {
    ...state,
    errorMessage,
    errorVisible,
    valid,
    value
  }
}

export default validation
