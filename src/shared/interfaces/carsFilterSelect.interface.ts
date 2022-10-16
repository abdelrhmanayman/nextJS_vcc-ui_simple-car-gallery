export interface carsFilterSelect {
    onSelectHandler: (carType: string) => void,
    defaultValue: string,
    listData: Record<string, number>
}