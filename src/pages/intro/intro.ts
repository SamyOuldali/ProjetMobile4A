import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { SampleModal } from "../sample-modal/sample-modal";
import { ShoppingListService } from '../../services/shopping-list/shopping-list.servive';
import { Item } from 'ionic-angular/components/item/item';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the Intro page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {
shoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private shopping: ShoppingListService,
  ) {
 
    this.shoppingList$= this.shopping
    .getShoppingList()
    .snapshotChanges()
    .map(changes=>{

      return changes.map(c=> ({

        key: c.payload.key, 
        ...c.payload.val(),

      }))
    });
  }

 
   

}
