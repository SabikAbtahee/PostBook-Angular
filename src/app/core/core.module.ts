import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsResponseInterceptor } from './services/http-response-interceptor.service';
import { CookieService } from './services/cookie.service';
import { HttpRequestInterceptorService } from './services/http-request-interceptor.service';

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [
		CookieService,
		{ provide: HTTP_INTERCEPTORS, useClass: HttpsResponseInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorService, multi: true }
	]
})
export class CoreModule {}
