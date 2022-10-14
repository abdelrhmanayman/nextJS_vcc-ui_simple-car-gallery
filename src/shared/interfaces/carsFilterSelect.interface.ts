export interface carsFilterSelect {
    onSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    defaultValue: string,
    listData: string[]
}