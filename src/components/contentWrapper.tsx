import React, {useContext} from 'react';
// import PodcastWrapper from './podcastWrapper';
import AboutWrapper from './about/aboutWrapper';
import ConferenceWrapper from './conference/conferenceWrapper';
import BuzzwordWrapper from './buzzword/buzzwordWrapper';
import InspirationWrapper from './inspiration/inspirationWrapper';
import ProjectWrapper from './project/projectWrapper';
import {PageContext, Pages} from '../providers/pageProvider';
import '../styles/content.scss';

const renderContent = (pageName: Pages) => {
    switch(pageName) {
        case Pages.About:
            return (<AboutWrapper/>)
        case Pages.Buzzword:
            return (<BuzzwordWrapper/>)
        case Pages.Conference:
            return (<ConferenceWrapper/>)
        case Pages.Project:
            return (<ProjectWrapper/>)
        case Pages.Inspiration:
            return (<InspirationWrapper/>)
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
    return ( 
        <div className="content">
            {renderContent(pageName)}
        </div>
    )
}

export default ContentWrapper