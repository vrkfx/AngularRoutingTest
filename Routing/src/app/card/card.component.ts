import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productsArray!:any[];

  constructor() { }

  ngOnInit(): void {
    fetch('./assets/Data/products.json')
    .then(res => res.json())
    .then((data) => {
          this.productsArray = []
          this.productsArray.push(data)
          console.log(this.productsArray)
        })
  }


}
