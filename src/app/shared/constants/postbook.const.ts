import { Status } from '../enums/shared.enum';

export const ModalOpenTimer = 5000;

export const PortalKeys = {
	AccessToken: 'AccessToken',
	RefreshToken: 'RefreshToken'
};

export const Navigation = [
	{
		Name: 'Posts',
		Route: 'posts',
		Icon: 'apps'
	},
	{
		Name: 'Courses',
		Route: 'courses',
		Icon: 'auto_stories'
	},
	{
		Name: 'Quiz',
		Route: 'quiz',
		Icon: 'quiz'
	},
	{
		Name: 'Book Store',
		Route: 'book-store',
		Icon: 'storefront'
	}
];

export const StatusConst = [
	{
		Key: 'Public',
		Value: Status.Public
	},
	{
		Key: 'Private',
		Value: Status.Private
	}
];
