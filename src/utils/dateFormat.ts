import { format, parseISO } from 'date-fns';

export const dateFormat = (date: string) => {
    return format(parseISO(date), "dd/MM/yyyy HH:mm");
}

export const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return dateFormat(result.toISOString());
}