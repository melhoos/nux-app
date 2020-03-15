import React, {ReactNode, useState} from 'react';

enum Pages {
    About = 'Om NUX',
    Buzzword = 'Buzzwords',
    Conference = 'Kurs og Konferanser',
    Project = 'Prosjekter',
    Inspiration = 'Inspirasjon',
    // Podcasts = 'Podcaster'
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
