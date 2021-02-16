import React from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import form from '../data/data'
import InputField from './common2/InputField'
import CheckBox from './common2/Checkbox'
import InputSelect from './common2/InputSelect'
// import { useForm } from 'react-hook-form';


const Form = () => {
  const [totalFields, settotalFields] = React.useState(0)
  const [firstName, setfirstName] = React.useState(null)
  const [middleName, setMiddleName] = React.useState(null)
  const [lastName, setlastName] = React.useState(null)
  const [hasMiddleName, sethasMiddleName] = React.useState(false)
  const [address1, setaddress1] = React.useState(null)
  const [address2, setaddress2] = React.useState(null)
  const [city, setcity] = React.useState(null)
  const [country, setcountry] = React.useState(null)
  const [apartmentOrSuite, setapartmentOrSuite] = React.useState(null)
  const [zipCode, setzipCode] = React.useState(null)
  const [state, setstate] = React.useState(null)

  const getFieldValue = (id, value) => {
    switch (id) {
      case 'firstName': setfirstName(value)
      case 'middleName': setMiddleName(value)
      case 'lastName': setlastName(value)
      case 'hasMiddleName': sethasMiddleName(value)
      case 'address1': setaddress1(value)
      case 'apartmentOrSuite': setapartmentOrSuite(value)
      case 'address2': setaddress2(value)
      case 'city': setcity(value)
      case 'country': setcountry(value)
      case 'state': setstate(value)
      case 'zipCode': setzipCode(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, middleName, hasMiddleName, state, country)
  }

  // const { register, handleSubmit, errors, watch } = useForm();

  // let watchvalues = null
  // let element = null
  const formComponent = (formSection) => {
    return formSection.map((item, index) => {

      // if (item.dependencies) {
      //   let id = Object.keys(item.dependencies)
      //   element = document.getElementById(id[0])
      //   console.log(element.checked)
      //   // if (element.checked) return null
      // }
      if (item.type === "text" || item.type === "number") {
        return (
          <Box m={1} key={index} >
            <InputField
              type={item.type}
              label={item.label}
              definition={item.definition}
              id={item.id}
              mask={item.mask}
              variant="outlined"
              size="small"
              getFieldValue={getFieldValue}
            />
          </Box>
        )
      } else if (item.type === "checkbox") {
        return (
          <Box m={1} key={index} >
            <CheckBox
              label={item.label}
              definition={item.definition}
              id={item.id}
              getFieldValue={getFieldValue}
            />
          </Box>
        )
      }
      else if (item.type === "select") {
        return (
          <Box m={1} key={index} >
            <InputSelect
              label={item.label}
              definition={item.definition}
              id={item.id}
              sourceList={item.sourceList}
              getFieldValue={getFieldValue}
            />
          </Box>
        )
      }
    })
  }

  return (
    <Box mt={3}>
      <Typography variant="h6">Total number of fields are {totalFields}</Typography>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((section, index) => (
          <Box ml={2} key={index}>
            <Box>{section}</Box>
            <Box>{formComponent(form[section])}</Box>
          </Box>
        ))}
        <Button type="submit" variant="outlined">submit</Button>
      </form>
    </Box >
  )
}

export default Form