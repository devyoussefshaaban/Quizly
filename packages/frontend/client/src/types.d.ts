interface User {
    name: string;
    email: string;
    password?: string;
}

interface Action {
    type: string;
    payload?: any;
    [key: string]: any;
}
