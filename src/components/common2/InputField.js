import React from 'react'
import { TextField } from '@material-ui/core'

const InputField = (props) => {
  const [validationError, setvalidationError] = React.useState(false)
  const { type, label, id, definition, variant, mask, size, getFieldValue } = props

  const handleChange = (e) => {
    if (mask) {
      const isValid = mask.test(e.target.value)
      if (isValid) {
        setvalidationError(false)
        getFieldValue(e.target.id, e.target.value)
      } else {
        setvalidationError(true)
      }
    }
  }

  return (
    <TextField
      variant={variant}
      type={type}
      label={label}
      id={id}
      size={size}
      placeholder={definition}
      onBlur={handleChange}
      error={validationError}
      helperText={validationError && "Invalid Name"}
    />
  )
}

export default InputField