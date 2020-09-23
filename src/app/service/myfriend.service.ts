import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyFriend} from "../model/MyFriend";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class MyfriendService {

    constructor(private http:HttpClient
                ,private config:ConfigService
    ) { }

    // public HOST="http://serverforcms.heyunhui.top";
    // private HOST="http://localhost:8080";

    private saveMyfrindUrl=this.config.HOST+"/public/saveMyFrinds";
    saveMyFriends(myfriends:MyFriend){

        return this.http.post(this.saveMyfrindUrl,myfriends).toPromise();
    }


    private deteMyFriendsUrl=this.config.HOST+"/public/deteMyFriends";
    deleteMyFriends(id:string){
        let parm={
            "myfriendid":id
        }

        return this.http.post(this.deteMyFriendsUrl,parm).toPromise();

    }

    private getSingleMyFriendsUrl=this.config.HOST+"/public/getSingleMyFriends";
    getSingleMyFriends(id:string){

        let parm={
            "myfriendid":id
        }

        return this.http.post(this.getSingleMyFriendsUrl,parm).toPromise();
    }

    private getMyFriendsListUrl=this.config.HOST+"/public/getLatestMyFriends";
    getMyFriendsList(){
        return this.http.get(this.getMyFriendsListUrl).toPromise();
    }
}
