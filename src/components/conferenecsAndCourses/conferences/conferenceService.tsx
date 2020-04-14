import { apiUrl } from '../../../utility/urls';
import Conference from '../../../interfaces/conference';
import { Service, ConnectionStatus } from '../../../utility/service';

export async function getConferences(): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conferences`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const reps = response ? response : [];
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: reps}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function getConferencesFromToday(): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conferencesFromToday`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const reps = response ? response : [];
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: reps}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function getConferencesBySearch(onlyShowFromTomorrow: boolean, searchWords: string[], month: string | undefined, year: string | undefined): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conferencesBySearch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                SearchWords: searchWords,
                Month: month,
                Year: year,
                OnlyFromTomorrow: onlyShowFromTomorrow
            })
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const reps = response ? response : [];
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: reps}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}