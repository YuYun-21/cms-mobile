import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalOptions} from "@ionic/core";
import {LoginComponent} from "../../components/login/login.component";

@Component({
  selector: 'app-p403',
  templateUrl: './p403.page.html',
  styleUrls: ['./p403.page.scss'],
})
export class P403Page implements OnInit {

    constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

    login(){
        this.presentModal();
    }


    async presentModal() {
        const modal = await this.modalController.create(<ModalOptions>{
            component: LoginComponent

        });
        return await modal.present();
    }
}
