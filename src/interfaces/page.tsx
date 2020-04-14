enum PageType {
    Home,
    Conferences,
    Buzzwords,
    Inspiration,
    About
}

interface Page {
    type: PageType,
    url: string,
    name: string
}

const Pages: Page[] = [
    {
        type: PageType.Conferences,
        url: "/conferenecs-and-courses",
        name: "Konferanser og kurs"
    },
    {
        type: PageType.Buzzwords,
        url: "/buzzwords",
        name: "Faguttrykk"
    },
    {
        type: PageType.Inspiration,
        url: "/inspiration",
        name: "Lurt å lese"
    },
    {
        type: PageType.About,
        url: "/about",
        name: "Om NUX"
    }
]

const InitPage = Pages[0];

export default Page
export { Pages, InitPage }