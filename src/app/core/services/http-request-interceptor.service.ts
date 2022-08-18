import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortalKeys } from '@shared';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {
	constructor(private cookieService: CookieService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const authAccessToken = this.cookieService.getCookie(PortalKeys.AccessToken);
		if (authAccessToken) {
			const authReq = req.clone({
				headers: req.headers.set('Authorization', 'bearer ' + authAccessToken)
			});

			return next.handle(authReq);
		}
		return next.handle(req);
	}
}
