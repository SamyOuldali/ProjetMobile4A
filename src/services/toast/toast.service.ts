import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular/components/toast/toast-controller";


@Injectable()


export class ToastService{

        constructor(private toastctrl: ToastController) {

        }

        show(message:string, duration: number = 3500){

            return this.toastctrl
            .create({

                message,
                duration,
            })
            .present();
        }

}