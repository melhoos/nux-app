import React, {ReactNode, useState} from 'react';

enum PageName {
    Home = 'HOME',
    About = 'ABOUT',
    Conferences = 'CONFERENCES'
}

const initPage = PageName.Home

const PageContext = React.createContext<[PageName, Function]>([initPage, () => {}]);

interface Props {
    children: ReactNode
}

const PageProvider = (props: Props) => {
    const [state, setState] = useState<PageName>(PageName.Home);
    return (
        <PageContext.Provider value={[state, setState]}>
            {props.children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider, PageName };
