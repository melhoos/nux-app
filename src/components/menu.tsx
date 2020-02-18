import React, {useContext} from 'react';
import {PageContext, PageName} from '../providers/pageProvider';

const Menu = () => {
    const [pageName, setPageName] = useContext(PageContext);
    return (
        <header className="App-header">
            <button onClick={() => setPageName(PageName.Home)}> {PageName.Home}  </button>
            <button onClick={() => setPageName(PageName.About)}> {PageName.About} </button>
            <button onClick={() => setPageName(PageName.Conferences)}> {PageName.Conferences} </button>
            <button onClick={() => setPageName(PageName.Podcasts)}> {PageName.Podcasts} </button>
        </header>
    )
}

export default Menu;