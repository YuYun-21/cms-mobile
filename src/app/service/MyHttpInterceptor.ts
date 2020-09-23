import {HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import {Router} from "@angular/router";

import {AuthService} from "./auth.service";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{

    constructor(private storage: Storage
        ,private router:Router

        ,private authservice:AuthService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // YOU CAN ALSO DO THIS
        // const token = this.authenticationService.getToke()

        return from(this.storage.get("TOKEN"))
            .pipe(
                switchMap(token => {
                    if (token) {

                        if(request.url.indexOf("/member/")!=-1||request.url.indexOf("/auth/")!=-1||request.url.indexOf("/manage/")!=-1){
                            request = request.clone({ headers: request.headers.set('Passport', token) });
                        }

                    }


                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }



                    return next.handle(request).pipe(
                        map((event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                // do nothing for now
                                //  console.log(event.status);

                                if(request.url.indexOf("/member/")!=-1){

                                    //更新令牌环
                                    this.authservice.refreshToken();



                                }




                            }
                            return event;
                        }),
                        catchError((error: HttpErrorResponse) => {
                            const status =  error.status;
                            //const reason = error && error.error.reason ? error.error.reason : '';

                            //this.presentAlert(status, reason);
                            //console.dir(error);
                            if(error.status==401){
                                this.storage.remove("TOKEN")
                                    .then(()=>{
                                        this.router.navigate(['/p401']);
                                    })
                            }


                            if(error.status==403){
                                this.storage.remove("TOKEN")
                                    .then(()=>{
                                        this.router.navigate(['/p403']);
                                    })
                            }





                            return throwError(error);
                        })
                    );
                })
            );


    }


}
