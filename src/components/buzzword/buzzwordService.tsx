import {useState, useEffect} from 'react';
import Buzzword from '../../interfaces/buzzword';
import { Service } from '../../interfaces/dataService';
import { apiUrl } from '../../constants/urls';

const BuzzwordService = () => {
    const [buzzwords, setBuzzwords] = useState<Service<Buzzword[]>>({
        status: 'loading'
    })

    useEffect(() => {
        fetch(`${apiUrl}/buzzwords`)
            .then(response => response.json())
            .then(response => setBuzzwords({status: 'loaded', payload: response}))
            .catch(error => setBuzzwords({status: "error", error}))
    }, [])

    return buzzwords
}

export default BuzzwordService