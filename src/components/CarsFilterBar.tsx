import React from 'react'
import { TabNav, TabNavItem } from "vcc-ui";

import { carsFilterSelect } from "../shared/interfaces/carsFilterSelect.interface"

const CarsFilterSelect = ({ onSelectHandler, defaultValue, listData = {} }: carsFilterSelect) => {
    const [active, setActive] = React.useState(1);
    const totalCarsNumber: number = Object.values(listData).reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)

    return (
        <div className='car-filter'>
            <TabNav enableLineTransition>
                <TabNavItem
                    isActive={active === 1}
                    onClick={() => {
                        setActive(1);
                        onSelectHandler(defaultValue)
                    }}
                >
                    {defaultValue} ({totalCarsNumber})
                </TabNavItem>

                {Object.keys(listData).map((bodyType: string, index: number) => (
                    <TabNavItem
                        key={index}
                        isActive={active === index + 2}
                        onClick={() => {
                            setActive(index + 2);
                            onSelectHandler(bodyType)
                        }}
                    >
                        {bodyType.toUpperCase()} ({listData[bodyType]})
                    </TabNavItem>

                ))}
            </TabNav>
        </div>
    )
}

export { CarsFilterSelect }