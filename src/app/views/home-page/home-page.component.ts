import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  productlist$: any;
  // products$: [] = [];
  productlists$: any;
  categoryproucts$: any;

  constructor(
    private http: HttpClient,
    private chref: ChangeDetectorRef,
    private router : Router
    )
     {
    this.http.get('/api/productslist').subscribe(
      resp => {
        this.productlist$ = resp;
      }
    ),
      this.http.get('/api/products').subscribe(
        (response: []) => {
          let products$ = response;
          const shuffled = products$.sort(() => 0.5 - Math.random());
          this.productlists$ = shuffled.slice(0, 15);
          // this.chref.detectChanges();
        });
  }

  categorywise(name) {
    this.http.get(`/api/categorywise/${name}`).subscribe(
      resp => {
        this.categoryproucts$ = resp;
        console.log(this.categoryproucts$);
      }
    )
  }

  openCatProducts(id) {
    const url= "/products" ;
    this.router.navigate([url,id]);
  }

  ngOnInit(): void {
  }

}

