interface Conference {
    id: number,
    name: string,
    location: string,
    startDate: Date,
    endDate: Date, 
    tags: string[],
    link: string,
    description: string
}

export default Conference