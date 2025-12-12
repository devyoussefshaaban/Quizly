interface RouteLink {
    path: string;
    name: string;
}

export const navLinks: RouteLink[] = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/quiz",
        name: "Quiz",
    },
    {
        path: "/weekly-quiz",
        name: "Weekly Quiz",
    },
    {
        path: "rewards",
        name: "Rewards",
    },
    {
        path: "about",
        name: "About",
    },
];