export interface Resume {
  meta: Meta;
  basics: Basics;
  education: School[];
  skills: Skill[];
  work: Work[];
  interests: Interest[];
}

export interface Basics {
  name: string;
  fullName: string;
  label: string;
  image: string;
  summary: string;
  website: string;
  email: string;
  location: LocationInfo;
  phone: string;
  profiles: Profile[];
}

export interface LocationInfo {
  city: string;
  countryCode: string;
  country: string;
}

export interface Profile {
  username: string;
  url: string;
  network: string;
}

export interface School {
  endDate: string;
  startDate: string;
  area: string;
  studyType: string;
  institution: string;
}

export interface Interest {
  name: string;
  icon: string;
}

export interface Meta {
  theme: string;
}

export interface Skill {
  keywords: Array<KeywordClass | string>;
  name: string;
  icon?: null;
  level?: string;
}

export interface KeywordClass {
  name: string;
  logo: string;
}

export interface Work {
  summary: string[];
  website: string;
  name: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export type HeaderProps = {
  name: string;
  label: string;
  website: string;
  email: string;
  phone: string;
};

export interface ProfileProps {
  summary: string;
  image: string;
  location: LocationInfo;
  name: string;
}

export interface FooterProps {
  github: Profile;
  linkedin: Profile;
  email: string;
  phone: string;
  name: string;
}
