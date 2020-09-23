import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {AuthService} from "../../service/auth.service";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {

    user:Users;
    constructor(private authservice:AuthService
        ,private toastservice:ToastService) {
        this.user=new Users();
        this.loadMyUserInfo();
    }

    ngOnInit() {
    }


    save(){
        console.dir(this.user);

        this.authservice.addOrUpdateUser(this.user)
            .then((data:any)=>{
                if(data.msg=='ok'){
                    this.toastservice.showSuccessToast('保存成功');

                }
                else{

                    this.toastservice.showErrrorToast('保存失败，请重试');
                }


            })

    }
    loadMyUserInfo(){
        this.authservice.getMyUserInfo()
            .then((data:any)=>{
                if(data.msg=='ok'){
                    this.user=new Users();
                    this.user=data.obj;


                }
                else{

                    this.toastservice.showErrrorToast("获取信息异常请重试");
                }

            })
    }

}
