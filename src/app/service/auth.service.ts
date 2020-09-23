import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Users} from "../model/Users";
import { Storage } from '@ionic/storage'; //ionic storage 依赖项

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http:HttpClient,private config:ConfigService
        ,private storage:Storage) { }

    //用户信息添加及修改

    private addOrUpdateUserUrl=this.config.HOST+"/public/saveUser";
    addOrUpdateUser(users:Users){

        return this.http.post(this.addOrUpdateUserUrl,users).toPromise();
    }


    //登录
    private loginUrl=this.config.HOST+"/public/login";
    login(username:string,
          password:string){
        let parm={
            "username":username,
            "password":password

        }

        return this.http.post(this.loginUrl,parm).toPromise();

    }

    private refreshTokenUrl=this.config.HOST+"/auth/refreshToken";
    refreshToken(){
        let last:number= 0;
        let current:number=new Date().getTime();
        this.storage.get("FRESHTIME")
            .then((value:number)=>{
                console.log("currenttime"+current);
                console.log("lastfreshtime"+value);
                if(value){
                    if(current-value>(10*60*1000)){
                        this.http.get(this.refreshTokenUrl).toPromise()
                            .then((data:any)=>{
                                if(data.token!='error'){
                                    this.storage.set("TOKEN",data.token);

                                    this.storage.set("FRESHTIME",current);

                                    console.log("令牌成功刷新");
                                }
                            })



                    }
                }
                else{

                    this.http.get(this.refreshTokenUrl).toPromise()
                        .then((data:any)=>{
                            if(data.token!='error'){
                                this.storage.set("TOKEN",data.token);

                                this.storage.set("FRESHTIME",current);

                                console.log("令牌成功刷新");
                            }
                        })

                }




            })


    }


    private isRegistUserUrl=this.config.HOST+"/member/isRegistUser";
    isRegistUser(){

        return this.http.get(this.isRegistUserUrl).toPromise();
    }

    private getMyUserInfoUrl=this.config.HOST+"/member/getMyUserInfo";

    getMyUserInfo(){

        return this.http.get(this.getMyUserInfoUrl).toPromise();
    }
}
