import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-searchResult',
  templateUrl: './searchResult.component.html',
    styleUrls: ['./searchResult.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit() {
  }

  usuario:any;
  usuarios:any[] = [
      {id:1, nome:'vasea'},
      {id:2, nome:'ius'},
      {id:3, nome:'masa'},
      {id:4, nome:'ana'},
  ];

    openRequestedPopup(usuario:any, modal) {
        this.usuario = usuario;
        this.modalService.open(modal);
    }
}
