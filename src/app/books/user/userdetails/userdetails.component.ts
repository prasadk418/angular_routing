import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private _activeRoute : ActivatedRoute) { }
userdetails : any;

  ngOnInit() {
    //this.userdetails=this._activeRoute.paramMap['userdetails']
    this._activeRoute.paramMap.subscribe(p => {
      this.userdetails=p.get('userdetails');
    })

  }

}
