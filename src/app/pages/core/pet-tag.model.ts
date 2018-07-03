
export interface PetTag {
    shape: string,
    font: string,
    text: string,
    clip: boolean,
    gems: boolean,
    complete: boolean
}

export const initialTag: PetTag = {
    shape: '',
    font: 'sans-serif',
    text: '',
    clip: false,
    gems: false,
    complete: false
};