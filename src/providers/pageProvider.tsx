import React, {ReactNode, useState} from 'react';

enum Pages {
    //Home = 'HOME',
    About = 'OM NUX',
    Buzzword = 'BUZZWORD',
    Courses = 'KURS',
    Project = 'PROSJEKT',
    Inspiration = 'INSPIRASJON',
    // Conferences = 'CONFERENCES',
    // Podcasts = 'PODCASTS'
}

const initPage = Pages.About

const PageContext = React.createContext<[Pages, Function]>([initPage, () => {}])

interface Props {
    children: ReactNode
}

const PageProvider = (props: Props) => {
    const [state, setState] = useState<Pages>(Pages.About);
    return (
        <PageContext.Provider value={[state, setState]}>
            {props.children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider, Pages }
