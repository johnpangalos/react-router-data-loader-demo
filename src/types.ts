export type Navigation = {
  name: string;
  href: string;
  icon: string;
  current: boolean;
};

export type Stat = {
  name: string;
  stat: string;
  previousStat: string;
  changeType: string;
  change: string;
};

export type Person = {
  name: string;
  title: string;
  email: string;
  role: string;
};

export type Comment = {
  id: string;
  name: string;
  comment: string;
  date: number;
};
