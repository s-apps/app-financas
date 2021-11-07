import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpXsrfTokenExtractor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "src/app/auth/services/token/token.service";

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

  constructor(
    private xsrfTokenExtractor: HttpXsrfTokenExtractor,
    private tokenService: TokenService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let xsrfToken = this.xsrfTokenExtractor.getToken() as string;
    if (xsrfToken !== null) {
      req = req.clone({ withCredentials: true, setHeaders: { 'X-XSRF-TOKEN': xsrfToken, 'Authorization': `Bearer ${this.tokenService.token}` } });
    }
    return next.handle(req);
  }
}
