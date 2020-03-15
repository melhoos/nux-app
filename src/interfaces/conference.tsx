interface Conference {
    id: number,
    conferenceName: string,
    location: string,
    startDate: Date,
    endDate: Date,
    month: string, 
    price: string,
    tags: string[],
    link: string,
    description: string
}

export default Conference