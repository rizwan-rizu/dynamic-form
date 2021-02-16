import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const InputSelect = (props) => {
  const { label, id, sourceList, getFieldValue } = props
  const classes = useStyles();
  const [state, setstate] = React.useState('');

  const handleChange = (e) => {
    setstate(e.target.value)
    getFieldValue(e.target.name, e.target.value)
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="abc" >{label}</InputLabel>
      <Select
        id={id}
        name={id}
        value={state}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {sourceList.map((item, index) => {
          if (typeof item === 'object') {
            return <MenuItem key={index} value={item.name}>{`${item.name}, ${item.code}`}</MenuItem>
          } else {
            return <MenuItem key={index} value={item}>{item}</MenuItem>
          }
        })}
      </Select>
    </FormControl>
  );
}

export default InputSelect
