export interface Country {
    name: string;
    states: State[];
}

interface State {
    name: string;
    code: string;
}