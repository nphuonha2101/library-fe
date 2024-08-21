import { format, parseISO } from 'date-fns';

export const dateFormat = (date: string) => {
    return format(parseISO(date), "dd/MM/yyyy HH:mm");
}