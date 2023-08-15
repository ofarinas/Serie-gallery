export interface Serie {
	id: string;
	Actors: string;
	Overview: string;
	Rating: string;
	SeriesName: string;
	Episodes: Episode[];
}

export interface Episode {
	id: string;
	EpisodeName: string;
	Director: string;
	Language: string;
	Overview: string;
	Rating: string;
	EpisodeNumber: string;
}
