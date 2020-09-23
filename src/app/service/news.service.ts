import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    constructor(private config:ConfigService,
                private http:HttpClient) { }


    private getNewsListUrl=this.config.HOST+"/public/getNewsList";
    getNewsList(){

        return this.http.get(this.getNewsListUrl).toPromise();

    }


    private getSingleNewsUrl=this.config.HOST+"/public/getSingleNewsById";

    getSingleNews(id:string){
        let parm={
            "newsid":id
        }

        return this.http.post(this.getSingleNewsUrl,parm).toPromise();
    }
}
