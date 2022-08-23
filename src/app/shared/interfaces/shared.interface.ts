import { Status } from '../enums/shared.enum';

export interface ErrorResponse {
	error: string;
	message: string[];
	statusCode: number;
}

export interface Post {
	_id: string;
	Title: string;
	Author: User;
	Description: string;
	LastUpdateDate: Date;
	Status: Status;
	Likes: string[];
}

export interface User {
	UserName: string;
	_id: string;
}
