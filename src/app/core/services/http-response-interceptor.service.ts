import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class HttpsResponseInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap({
				next: (event) => {
					return event;
				},
				error: (err) => {
					if (typeof err?.error?.message == 'string') {
						err.error.message = [err.error.message];
					}
					return err;
				}
			})
		);
	}
}
