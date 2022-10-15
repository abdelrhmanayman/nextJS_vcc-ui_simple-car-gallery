export interface carsFilterSelect {
    onSelectHandler: (carType: string) => void,
    defaultValue: string,
    listData: string[]
}