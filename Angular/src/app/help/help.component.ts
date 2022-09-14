import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  router: any;

  constructor(private route:Router) { }

  ngOnInit() {
  }
show()
{
  alert("Your query has been submitted!")
}
}
