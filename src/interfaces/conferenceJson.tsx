interface ConferenceJson {
    id: number,
    name: string,
    location: string,
    startDate: string,
    endDate: string, 
    tags: string[],
    link: string,
    description: string
}

export default ConferenceJson;