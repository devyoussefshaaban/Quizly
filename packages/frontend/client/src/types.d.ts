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

interface Question {
    id: number;
    number?: number;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}