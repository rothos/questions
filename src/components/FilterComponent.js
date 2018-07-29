import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FilterComponent = ({active, children, onChange}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={active ? "checked" : ""}
                    onChange={onChange}
                    value={children}
                    color="primary"
                />
            }
            label={children}
        />
    )
}

export default FilterComponent
