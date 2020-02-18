import React, {useContext} from 'react';
import ConferenceWrapper from './conferenceWrapper';
import PodcastWrapper from './podcastWrapper';
import {PageContext, PageName} from '../providers/pageProvider';

const renderContent = (pageName: PageName) => {
    switch(pageName) {
        case PageName.Home:
            return (<>HOME</>);
        case PageName.About:
            return (<>ABOUT</>);
        case PageName.Conferences:
            return (<ConferenceWrapper/>)
        case PageName.Podcasts:
            return (<PodcastWrapper/>)
        default:
            return (<></>)
    }
} 

const ContentWrapper = () => {
    const [pageName, setPageName] = useContext(PageContext);
    return renderContent(pageName)
}

export default ContentWrapper;