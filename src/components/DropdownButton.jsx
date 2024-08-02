import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({dropdownInfo, }) {
  const handleChange = (event) => {
   dropdownInfo.setState(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={`drop-down-input-${dropdownInfo.label}`}>{dropdownInfo.label}</InputLabel>
        <Select
          labelId={`drop-down-label-${dropdownInfo.label}`}
          id={`drop-down-button-${dropdownInfo.label}`}
          defaultValue=""
          onChange={handleChange}
          label={dropdownInfo.label}
        >
          <MenuItem value="">
            <em>{dropdownInfo.defaultText}</em>
          </MenuItem>
          {dropdownInfo.buttons.map((button) => {
          
            return <MenuItem key={button} value={button}>{button}</MenuItem>
          })}
        </Select>
      </FormControl>
      
    </div>
  );
}
