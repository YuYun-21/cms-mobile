
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ToastService} from "../../service/toast.service";
import {ModalController} from "@ionic/angular";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;
    constructor(private authservice:AuthService
        ,private toastservice:ToastService
        ,private storage:Storage
        ,private modalController: ModalController) { }

    ngOnInit() {}



    login(){
        this.authservice.login(this.username,this.password)
            .then((data:any)=>{

                if(data.msg=='ok'){
                    this.toastservice.showSuccessToast('登录成功');
                    this.storage.set("TOKEN",data.token) //登录成功后第一步，将token信息存储到本地存储中
                        .then(()=>{
                            //关闭登录窗
                            //this.ref.close();
                            //this.dis
                            this.dismissModel();

                        })
                }
                else {
                    this.toastservice.showWarningToast('用户名或是密码错误，请重试');
                    this.username="";
                    this.password="";
                }


            })

    }
    dismissModel() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }


}
