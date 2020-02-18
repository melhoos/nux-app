import React, { ReactElement } from 'react';
import Data from '../types/data';

interface Props {
    data: Data[],
    tableHeaders: string[]
}

function formatArray(tags: string[]): ReactElement {
    return ( <> {tags.map( (tag: string, i:number) => (<span key={i} className="tag"> {tag} </span>))} </> )
}

function formatDate(d: Date): string {
    const months = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Des']
    return `${d.getDate()}.${months[d.getMonth()]}`;
}

function formatTableHeader(tableHeader: string): string {
    return tableHeader.split(/(?=[A-Z])/).join(" ");
}

function formatValue(d: Data, key: string): ReactElement {
    let value = (d as any)[key];
    if (value instanceof Date) {
        return (<> {formatDate(value)} </> )
    } else if (value instanceof Array) {
        return formatArray(value)
    } else {
        return (<> {value} </>)
    }
}

const DataList = (props: Props) => {
    const {data, tableHeaders} = props;
    return (
        <div className="table-wrapper">
            <table>
                <thead> 
                    <tr> 
                        { tableHeaders.map( (th:string, i:number) => ( <th key={i}>{formatTableHeader(th)}</th> ))} 
                    </tr> 
                </thead>
                <tbody>
                    {data.map((d: Data, i: number) => (
                        <tr key={i}> 
                            { tableHeaders.map((th: string, i:number) => (<td key={i}>{formatValue(d, th)} </td>) )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataList;