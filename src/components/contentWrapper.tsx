import React from 'react';
import AboutWrapper from './about/aboutWrapper';
import ConferenceWrapper from './conferenecsAndCourses/conferenecsAndCoursesWrapper';
import ConferenceList from './conferenecsAndCourses/conferences/conferenceList';
import FeedbackWrapper from './conferenecsAndCourses/feedback/feedbackWrapper';
import CoursesWrapper from './conferenecsAndCourses/courses/coursesWrapper';
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
                    <Route path="/conferenecs-and-courses/confs" component={ConferenceList} />
                    <Route path="/conferenecs-and-courses/feedback" component={FeedbackWrapper} />
                    <Route path="/conferenecs-and-courses/courses" component={CoursesWrapper} />
                    <Route path="/conferenecs-and-courses" component={ConferenceWrapper} />
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