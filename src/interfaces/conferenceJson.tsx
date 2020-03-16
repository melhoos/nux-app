interface ConferenceJson {
    id: number,
    conferenceName: string,
    country: string,
    city: string,
    startDate: string,
    endDate: string, 
    month: string,
    price: string,
    tags: string[],
    link: string,
    description: string
}

export default ConferenceJson