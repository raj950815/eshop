import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  private carts: any = [];
  private total: number = 0;
  constructor() { }

  ngOnInit() {
				this.loadCart();			
  }

  loadCart(): void {
    this.total = 0;
    this.carts = JSON.parse(localStorage.getItem('eshopCart'));
    this.carts.map(data => {
      this.total += data.price * data.quantity;
      data.total = data.price * data.quantity;
    });
	}

  deleteProduct(cart) {
    if (confirm(`Really delete the product: ${cart.productName} ?`)) {
       let ecart: any = JSON.parse(localStorage.getItem('eshopCart'));
       ecart.map(data => {
         if(cart._id === data._id) {
           let index = ecart.indexOf(data);
            ecart.splice(index, 1);
        }
      });
      localStorage.setItem("eshopCart", JSON.stringify(ecart));
      this.loadCart();
    }
  }

  increamentQnt(product) {
    let ecart: any = JSON.parse(localStorage.getItem('eshopCart'));
    ecart.map(data =>{
      if (product._id === data._id) {
        let index = ecart.indexOf(data);
        data.quantity = parseInt(data.quantity) + 1;
        if(data.quantity >= 5) {
          data.quantity = 5;
        }
        ecart.splice(index, 1);
        ecart.push(data);
        localStorage.setItem("eshopCart", JSON.stringify(ecart));
        this.loadCart();
      }
    });
  }

  decreamentQnt(product) {
    let ecart: any = JSON.parse(localStorage.getItem('eshopCart'));
    ecart.map(data =>{
      if (product._id === data._id) {
        let index = ecart.indexOf(data);
        data.quantity = parseInt(data.quantity) - 1;
        if(data.quantity <= 0) {
          data.quantity = 1;
        }
        ecart.splice(index, 1);
        ecart.push(data);
        localStorage.setItem("eshopCart", JSON.stringify(ecart));
        this.loadCart();
      }
    });
  }

}
