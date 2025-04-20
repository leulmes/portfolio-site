export interface activeProps {
    menu: boolean;
    setMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export interface activeProps2 {
    title: string; 
    href: string;
    menu: boolean;
    setMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};