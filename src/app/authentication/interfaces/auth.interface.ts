export interface SignInPayload {
	UserName: string;
	Password: string;
}

export interface SignUpPayload {
	UserName: string;
	Password: string;
	Email: string;
}

export interface ForgotPasswordPayload {
	Email: string;
}

export interface TokenResponse {
	access_token: string;
	refresh_token: string;
}
