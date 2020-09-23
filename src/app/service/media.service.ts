import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private config:ConfigService,
              private http:HttpClient) { }

    private getMediaListUrl=this.config.HOST+"/public/getMediaListByType";

    getMediaList(type:string) {
        let parm = {
            "type": type
        }

        return this.http.post(this.getMediaListUrl, parm).toPromise();
    }

    private getSingleMediaUrl=this.config.HOST+"/public/getMediaListById";

    getSingleMedia(id:string){
        let parm={
            "mediaid":id
        }

        return this.http.post(this.getSingleMediaUrl,parm).toPromise();
    }
}
