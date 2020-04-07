import React from 'react';
import AboutWrapper from './about/aboutWrapper';
import ConferenceWrapper from './conference/conferenceWrapper';
import BuzzwordWrapper from './buzzword/buzzwordWrapper';
import InspirationWrapper from './inspiration/inspirationWrapper';
import HomeWrapper from './home/homeWrapper';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../styles/content.scss';

const ContentWrapper = () => {
    // todo: add 404 not found page
    return ( 
        <div className="content">
            <Router>
                <Switch>
                    <Route path="/conferences" component={ConferenceWrapper} />
                    <Route path="/buzzwords" component={BuzzwordWrapper} />
                    <Route path="/inspiration" component={InspirationWrapper} />
                    <Route path="/about" component={AboutWrapper} />
                    <Route path="/" component={HomeWrapper} />
                </Switch>
            </Router>
        </div>
    )
}

export default ContentWrapper