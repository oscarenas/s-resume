import { Basics, HeaderProps } from '../interfaces/type';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const getData = {
  header(data: Basics): HeaderProps {
    const { name, label, website, email, phone } = data;
    return { name, label, website, email, phone };
  },
};
