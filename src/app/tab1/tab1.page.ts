import { Component } from '@angular/core';
import {ActionSheetController, AlertController, ToastController} from "@ionic/angular";
import {ToastService} from "../service/toast.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {CameraResultType, CameraSource, Plugins} from "@capacitor/core";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private actionSheetController: ActionSheetController
        ,private  alertController: AlertController
        ,private toastController: ToastController
        ,private toastservice:ToastService
    ,private sanitizer: DomSanitizer) {}

    photo: SafeResourceUrl;

    async takePicture() {
        const image = await Plugins.Camera.getPhoto({
            quality: 100,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera
        });

        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: '填出框标题',
            buttons: [{
                text: '播放',
                role: 'destructive',
                icon: 'play',
                handler: () => {
                    this.play();
                }
            }, {
                text: '图标二',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
            }]
        });
        await actionSheet.present();
    }



    async presentAlert() {
        const alert = await this.alertController.create({
            header: '警告框头部',
            subHeader: '副标题',
            message: '提示信息.',
            buttons: ['OK']
        });

        await alert.present();
    }


    play(){
        console.log("播放方法被调用");
    }



    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: '确认框!',
            message: '请问您吃饭了没有？',
            buttons: [
                {
                    text: '没有',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                        this.toastservice.showWarningToast("你没有吃过饭了");
                    }
                }, {
                    text: '吃了',
                    handler: () => {
                        console.log('Confirm Okay');
                        this.toastservice.showErrrorToast("你吃过饭了啊");
                    }
                }
            ]
        });

        await alert.present();
    }



    async presentToast() {
        const toast = await this.toastController.create({
            message: '提示信息.',
            duration: 4000,
            color:"danger",
            position:"middle"
        });
        toast.present();
    }


    presentToastByService(){

        this.toastservice.showSuccessToast("恭喜您注册成功");

    }

}
