export interface activeProps {
    active: boolean;
    setActive: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};