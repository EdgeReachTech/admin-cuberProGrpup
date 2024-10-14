export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
}

export interface Education {
  school: string;
  degree: string;
  course: string;
  completion: string;
}

export interface Experience {
  institution: string;
  role: string;
  time: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  socialMedia: SocialMedia;
  education: Education[];
  experience: Experience[];
}

export interface TeamUpdateCreateProps {
  teamMember: TeamMember | null;
  showFields: boolean;
  setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<TeamMember | null>>;
}

export interface ProjectObj {
  title: string;
  content: string;
  image: string;
  _id: string;
}

export interface ProjectUpdateCreateProps {
  project?: ProjectObj;
  index: number;
  showFields: boolean;
  setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface BlogsObj {
  title: string;
  content: string;
  image: string;
  media: string;
  _id: string;
}

export interface BlogUpdateCreateProps {
  blog?: BlogsObj; // teamMember can be undefined
  index: number;
  showFields: boolean;
  setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export interface TestimonyObj {
  name: string;
  role: string; // Changed to lowercase for consistency
  company: string; // Fixed typo
  content: string;
  image: string;
  _id: string;
}
export interface TetimonyUpdateCreateProps {
  testimony?: TestimonyObj;
  index: number;
  showFields: boolean;
  setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

