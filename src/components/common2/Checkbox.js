import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const CheckBox = (props) => {
  const { label, id, definition, getFieldValue } = props

  const [state, setState] = React.useState({
    id: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    getFieldValue(event.target.id, event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name={id}
            id={id}
            color="primary"
          />
        }
        label={label}
      />
    </FormGroup>
  )
}

export default CheckBox
