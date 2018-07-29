import React from 'react'

const FilterComponent = ({active, children, onClick}) => {
    return (
        <span onClick={onClick} className={active ? "active" : ""}>
            {children}
        </span>
    )
}

export default FilterComponent
