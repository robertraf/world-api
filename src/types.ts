export interface Country {
    name: string;
    states: State[];
}

interface State {
    name: string;
    state_code: string;
}