import React, {useContext} from 'react';
// import ConferenceWrapper from './conferenceWrapper';
// import PodcastWrapper from './podcastWrapper';
import AboutWrapper from './about/aboutWrapper';
import BuzzwordWrapper from './buzzword/buzzwordWrapper';
import {PageContext, Pages} from '../providers/pageProvider';

const renderContent = (pageName: Pages) => {
    switch(pageName) {
        case Pages.About:
            return (<AboutWrapper/>)
        case Pages.Buzzword:
            return (<BuzzwordWrapper/>)
        // case PageName.Conferences:
        //     return (<ConferenceWrapper/>)
        // case PageName.Podcasts:
        //     return (<PodcastWrapper/>)
        default:
            return (<></>)
    }
} 

const ContentWrapper = () => {
    const [pageName] = useContext(PageContext)
    return renderContent(pageName)
}

export default ContentWrapper