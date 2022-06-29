export interface actorCreationDTO {
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}

export interface actorMovieDTO {
    id: number;
    name: string;
    characterName: string;
    picture: string;
}