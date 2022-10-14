import { carsFilterSelect } from "../shared/interfaces/carsFilterSelect.interface"

const CarsFilterSelect = function ({ onSelectHandler, defaultValue, listData }: carsFilterSelect) {
    return (
        <select
            className="car-filter"
            onChange={onSelectHandler}
            aria-label="car filter"
        >
            <option value={defaultValue}>{defaultValue}</option>
            {listData.map((item: string) =>
            (<option value={item} key={item}>
                {item.toUpperCase()}
            </option>)
            )}
        </select>
    )
}

export { CarsFilterSelect }