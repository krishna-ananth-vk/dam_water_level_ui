import {
    addSeconds,
} from 'date-fns';


export const addOrSubtractSeconds = (date: Date, n: number) => addSeconds(date, n);
