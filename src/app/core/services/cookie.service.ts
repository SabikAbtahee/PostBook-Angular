import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
	private safeDecodeURIComponent(str: string) {
		try {
			return decodeURIComponent(str);
		} catch (e) {
			return str;
		}
	}
	getCookie(key: string): any {
		let cookieArray: string[], cookie: string, i: number, index: number, name: string;
		const cookieString = (document && document.cookie) || '';
		cookieArray = cookieString.split(';').map((cookie: any) => {
			return cookie.trim();
		});
		for (i = 0; i < cookieArray.length; i++) {
			cookie = cookieArray[i];
			index = cookie.indexOf('=');
			if (index > 0) {
				// ignore nameless cookies
				name = this.safeDecodeURIComponent(cookie.substring(0, index));
				if (name === key) return this.safeDecodeURIComponent(cookie.substring(index + 1));
			}
		}
		return '';
	}

	eraseCookie(cookieName: string, domain?: string): void {
		let cookie = `${cookieName}=; path=/; max-age=0;`;
		if (domain) cookie += `domain=${domain}`;
		document.cookie = cookie;
	}

	eraseAndSetCookie(name: string, value: string, minutesToLive?: number, domain?: string): void {
		this.eraseCookie(name);
		let cookie = `${name}=${value}; path=/; `;
		if (typeof minutesToLive === 'number') {
			cookie += '; max-age=' + minutesToLive * 60;
		}
		if (domain) cookie += `domain=${domain}`;
		document.cookie = cookie;
	}
}
