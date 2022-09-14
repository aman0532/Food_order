import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit() {
  }
  exit()
  {
    this.route.navigate([`/food-page`]);
  }

}
