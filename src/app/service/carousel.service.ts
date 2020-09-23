import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

    constructor(private http:HttpClient,
                private config:ConfigService) { }


    private getCarouselListUrl=this.config.HOST+"/public/getCarouselList";

    getCarouselList(){
        return this.http.get(this.getCarouselListUrl).toPromise();
    }
}
