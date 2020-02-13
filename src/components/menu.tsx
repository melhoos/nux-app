import React, {useContext} from 'react';
import {PageContext, PageName} from '../providers/pageProvider';

const Menu = () => {
    const [pageName, setPageName] = useContext(PageContext);
    
    return (
        <header className="App-header">
            <button onClick={() => setPageName(PageName.Home)}> HOME </button>
            <button onClick={() => setPageName(PageName.About)}> ABOUT </button>
            <button onClick={() => setPageName(PageName.Conferences)}> CONFERENCES </button>
        </header>

    )
}

export default Menu;