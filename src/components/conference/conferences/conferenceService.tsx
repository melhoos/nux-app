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
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}