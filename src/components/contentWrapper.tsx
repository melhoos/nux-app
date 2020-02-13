import React, {useContext} from 'react';
import {PageContext, PageName} from '../providers/pageProvider';

const renderContent = (pageName: PageName) => {
    switch(pageName) {
        case PageName.Home:
            return (<>HOME</>);
        case PageName.About:
            return (<>ABOUT</>);
        default:
            return (<></>)
    }
} 

const ContentWrapper = () => {
    const [pageName, setPageName] = useContext(PageContext);
    return renderContent(pageName)
}

export default ContentWrapper;