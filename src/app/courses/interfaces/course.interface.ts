export interface Course {
	_id: string;
	Title: string;
	Description: string;
	Chapters: Chapter[];
}

export interface Chapter {
	Title: string;
	Description: string;
	VideoSourceLink: any;
	IsComplete?: boolean;
}
