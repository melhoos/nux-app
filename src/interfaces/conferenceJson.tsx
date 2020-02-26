interface ConferenceJson {
    id: number,
    conferenceName: string,
    location: string,
    startDate: string,
    endDate: string, 
    price: string,
    tags: string[],
    link: string,
    description: string
}

export default ConferenceJson