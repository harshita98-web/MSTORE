import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productlists$: any;
  name: string;
  subcategories$:any;

  constructor(private http: HttpClient,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.paramMap.subscribe(p => {
      let catid = parseInt(p.get('id'),10);
      console.log(catid);
      this.http.get(`http://localhost:3000/api/categorywise/${catid}`).subscribe(
        resp => {
          this.productlists$ = resp;
        }
      ),
  
    this.http.get(`http://localhost:3000/api/subcategory/${catid}`).subscribe(
        response => {
          this.subcategories$ = response;
        }
      )
    })
  }

  ngOnInit(): void {
  }

}
