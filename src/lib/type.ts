export interface TeamMember {
    name: string;
    role: string;
    image: string;
    linkedInProfile: string;
    id: number;
}

export interface TeamUpdateCreateProps {
    teamMember?: TeamMember;  // teamMember can be undefined
    index: number;
    showFields: boolean;
    setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProjectObj {
    title: string;
    content: string;
    image: string;
    id: number;
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
    id: number;
}

export interface BlogUpdateCreateProps {
    blog?: BlogsObj;  // teamMember can be undefined
    index: number;
    showFields: boolean;
    setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}
