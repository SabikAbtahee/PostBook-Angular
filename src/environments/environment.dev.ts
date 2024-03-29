// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { environmentDefault } from './environment.default';

// The list of file replacements can be found in `angular.json`.
const baseUrl = 'http://127.0.0.1:3000';

export const environment = {
	production: false,
	//Auth Endpoints
	// SignIn: `${baseUrl}/auth/signin`,
	// SignUp: `${baseUrl}/auth/signup`,
	// LogOut: `${baseUrl}/auth/logout`,
	// RefreshToken: `${baseUrl}/auth/refresh`,
	...environmentDefault
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
