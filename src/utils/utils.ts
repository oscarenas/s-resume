import { KeywordClass, Skill } from './../interfaces/type.d';
import { Basics, HeaderProps, ProfileProps } from '../interfaces/type';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const getData = {
  header(data: Basics): HeaderProps {
    const { name, label, website, email, phone } = data;
    return { name, label, website, email, phone };
  },
  profile(data: Basics): ProfileProps {
    const { summary, image, location, name } = data;
    return { summary, image, location, name };
  },
  skills(data: Skill[]): {
    personal(): string[];
    professional(): string[];
    codeInfo(): KeywordClass[];
  } {
    return {
      personal() {
        return data?.find(item => item.name == 'personal')?.keywords! as string[];
      },
      professional() {
        return data?.find(item => item.name == 'professional')?.keywords! as string[];
      },
      codeInfo() {
        return data?.find(item => item.name == 'about programming')?.keywords! as KeywordClass[];
      },
    };
  },
};
