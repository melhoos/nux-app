import React, {ReactElement} from 'react';
import Data from '../../types/data';
import Buzzword from '../../interfaces/buzzword';

interface Props {
    buzzwords: Data[]
}

function formatData (data: Data, i: number): ReactElement {
    const bw = (data as Buzzword)
    if (bw.name && bw.description) return (<p key={i}><span>{bw.name}:</span> {bw.description}</p>)
    else return (<></>)
}

const BuzzwordList = (props: Props) => {
    const {buzzwords} = props
    return ( <> { buzzwords.map((d: Data, i: number) => formatData(d, i) )} </> )
}

export default BuzzwordList