interface Conference {
    id: number,
    conferenceName: string,
    location: string,
    startDate: Date,
    endDate: Date, 
    price: string,
    tags: string[],
    link: string,
    description: string
}

export default Conference