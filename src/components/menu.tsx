import React, {useContext} from 'react';
import {PageContext, Pages} from '../providers/pageProvider';
import '../styles/menu.scss';

const Menu = () => {
    const [pageName, setPageName] = useContext(PageContext)
    const pages = Object.keys(Pages)

    const getMenuBtn = (page: string, i: number) => {
        const value = (Pages as any)[page]
        return (<button key={i} className={pageName === value ? 'selected' : ''} onClick={() => setPageName(value)}> {value} </button>)
    }
    return (
        <header className="Menu">
            { pages.map((page: string, i:number) => getMenuBtn(page, i)) }
        </header>
    )
}

export default Menu