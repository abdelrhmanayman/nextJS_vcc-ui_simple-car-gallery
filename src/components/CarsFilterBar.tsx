import React from 'react'
import { TabNav, TabNavItem } from "vcc-ui";
import { carsFilterSelect } from "../shared/interfaces/carsFilterSelect.interface"

const CarsFilterSelect = function ({ onSelectHandler, defaultValue, listData }: carsFilterSelect) {
    const [active, setActive] = React.useState(1);
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
                    {defaultValue}
                </TabNavItem>

                {listData.map((item: string, index: number) => (
                    <TabNavItem
                        key={index}
                        isActive={active === index + 2}
                        onClick={() => {
                            setActive(index + 2);
                            onSelectHandler(item)
                        }}
                    >
                        {item.toUpperCase()}
                    </TabNavItem>
                ))}
            </TabNav>
        </div>
    )
}

export { CarsFilterSelect }