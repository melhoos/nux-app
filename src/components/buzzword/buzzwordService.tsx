import { apiUrl } from '../../utility/urls';
import Buzzword from '../../interfaces/buzzword';
import { Service, ConnectionStatus } from '../../utility/service';

export async function getBuzzwords(): Promise<Service<Buzzword[]>> {
    return await fetch(`${apiUrl}/buzzwords`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Buzzword[]) => {
            const result: Service<Buzzword[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Buzzword[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}
