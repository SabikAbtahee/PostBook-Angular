const baseUrl = 'http://127.0.0.1:3000';

export const environmentDefault = {
	PortalName: 'PostBook',
	PasswordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,15}$/,
	//Auth Endpoints
	SignIn: `${baseUrl}/auth/signin`,
	SignUp: `${baseUrl}/auth/signup`,
	LogOut: `${baseUrl}/auth/logout`,
	ForgotPassword: `${baseUrl}/auth/forgot-password`,
	RefreshToken: `${baseUrl}/auth/refresh`,
	User: `${baseUrl}/users`,
	Post: `${baseUrl}/post`
};
