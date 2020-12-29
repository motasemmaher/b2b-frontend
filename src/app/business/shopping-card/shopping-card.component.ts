import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ShoppingCartService } from './service/shopping-cart.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  //cart = stores;
  total: number;


  cartForm: FormGroup;

  items: FormArray;


  constructor(private shoppingCartService: ShoppingCartService, private alertController: AlertController) {
    this.getShoppingCartItems();
  }

  getShoppingCartItems() {
    this.shoppingCartService.getShoppingCart().subscribe((res) => {
      this.items = new FormArray([]);
      res.cartItems.forEach((item) => {
        this.items.push(new FormGroup({
          cartItemId: new FormControl(item._id),
          id: new FormControl(item.product._id),
          name: new FormControl(item.product.name),
          price: new FormControl(item.product.price),
          description: new FormControl(item.product.description),
          quantity: new FormControl(item.quantity),
          image: new FormControl(item.product.image),
          tags: new FormControl(item.product.tags)
        }));
      });
      this.cartForm = new FormGroup({
        items: this.items
      });
      this.total = this.calculateTotal();
    })
  }

  ngOnInit(): void {

  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < ((this.cartForm.get('items') as FormArray).length); i++) {
      total += ((this.cartForm.get('items') as FormArray).at(i).get('quantity').value * (this.cartForm.get('items') as FormArray).at(i).get('price').value);
    }
    return total;
  }

  updateCartItem(cartItemId: string, quantity: number) {
    this.shoppingCartService.updateCartItemInShoppingCart(cartItemId, { quantity }).subscribe((res) => {
      console.log(res);
    });
  }

  add(i: any) {
    let quantity = (this.cartForm.get('items') as FormArray).at(i).get('quantity').value;
    const cartItemId = (this.cartForm.get('items') as FormArray).at(i).get('cartItemId').value;
    (this.cartForm.get('items') as FormArray).at(i).get('quantity').setValue(quantity + 1);
    this.total = this.calculateTotal();
    this.updateCartItem(cartItemId, quantity + 1);

  }

  minus(i: any) {
    let quantity = (this.cartForm.get('items') as FormArray).at(i).get('quantity').value;
    const cartItemId = (this.cartForm.get('items') as FormArray).at(i).get('cartItemId').value;
    (this.cartForm.get('items') as FormArray).at(i).get('quantity').setValue(quantity - 1);
    this.total = this.calculateTotal();
    this.updateCartItem(cartItemId, quantity - 1);
  }

  remove(i: any) {
    const cartItemId = (this.cartForm.get('items') as FormArray).at(i).get('cartItemId').value;
    this.shoppingCartService.removeCartItemInShoppingCart(cartItemId).subscribe((res) => {
      (this.cartForm.get('items') as FormArray).removeAt(i);
      this.total = this.calculateTotal();
      console.log(res);
    })
  }


  get itemsArray(): FormArray {
    return this.cartForm.get("items") as FormArray;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkout info',
      inputs: [
        {
          name: 'deliveryAddress',
          type: 'text',
          placeholder: 'Delivery Address'
        },
        {
          name: 'phoneNumber',
          type: 'text',
          placeholder: 'Phone Number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          // handler: (blah) => {
          //   console.log(blah)
          // }
        }, {
          text: 'Okay',
          handler: (data) => {
            console.log(data)
            this.shoppingCartService.checkout(data).subscribe(() => this.getShoppingCartItems());
          }
        }
      ]
    });
    await alert.present();
  }
  onSubmit() {
    this.presentAlertConfirm();
  }

}
