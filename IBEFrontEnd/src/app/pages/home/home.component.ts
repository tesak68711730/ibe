import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    flght:any;
    flghts:any[] = [
        {
            "flight_id": 1,
            "from_location": "Chisinau",
            "from_iata_code": "KIV",
            "to_location": "Rome - Ciampino",
            "to_iata_code": "CIA",
            "leaving_data": "2018-01-18",
            "fly_leave_begin": "00:25:00",
            "fly_leave_end": "03:10:00",
            "returing_data": "2018-01-31",
            "fly_retur_begin": "09:15:00",
            "fly_retur_end": "12:25:00",
            "price": 204.7,
            "flight_name_company": "Air Moldova",
            "flight_icon_company": "http://www.airport.md/data/623/68_137_img1.gif"
        },
        {
            "flight_id": 2,
            "from_location": "Moscova - Sheremetyevo",
            "from_iata_code": "SVO",
            "to_location": "Chisinau",
            "to_iata_code": "KIV",
            "leaving_data": "2018-01-24",
            "fly_leave_begin": "13:20:00",
            "fly_leave_end": "15:55:00",
            "returing_data": "2018-01-30",
            "fly_retur_begin": "06:35:00",
            "fly_retur_end": "09:15:00",
            "price": 149.33,
            "flight_name_company": "Russian Fly",
            "flight_icon_company": "https://www.aeroflot.ru/static/common_tpl/images/en/logo_en.gif"
        },
        {
            "flight_id": 3,
            "from_location": "Rome - Ciampino",
            "from_iata_code": "CIA",
            "to_location": "Istanbul - Atatürk International",
            "to_iata_code": "IST",
            "leaving_data": "2018-01-22",
            "fly_leave_begin": "07:10:00",
            "fly_leave_end": "09:40:00",
            "returing_data": "2018-01-26",
            "fly_retur_begin": "09:00:00",
            "fly_retur_end": "11:20:00",
            "price": 233,
            "flight_name_company": "Italy Fly",
            "flight_icon_company": "https://www.alitalia.com/content/alitalia/alitalia-it/it/alitalia-config/header-footer/header/header/_jcr_content/header/logo1.img.png/1512988393495.png"
        }
    ];

    URL = 'http://localhost:8080/rest/flight/';
    private flights: Array<any>;


  constructor(private http: Http, private modalService:NgbModal) {
      this.getAll().subscribe(data=>{
      this.flights = data._body;
    });
  }

  ngOnInit() {}

    getAll() : Observable<any> {
        console.log('func -->> getAll');
        return this.http.get(this.URL);
    }

  searchOneWay(from, to, leaving, adult, child, typePers,  business_class) {

    console.log("You make a one way search : \nFrom : " + from +
          ", \nTo : " + to +
          ", \nleaving data : " + leaving +
          ", \nadults : " + adult +
          ", \nchild : " + child +
          ", \ntypePerson : " + typePers +
          ", \nclass : " + business_class +".");
  }
    searchReturnway(from, to, leaving, ret, adult, child, typePers, business_class){

        console.log("You make a return way search : \nFrom : " + from +
            ", \nTo : " + to +
            ", \nleaving data : " + leaving +
            ", \nreturn data : " + ret +
            ", \nadults : " + adult +
            ", \nchild : " + child +
            ", \ntypePerson : " + typePers +
            ", \nclass : " + business_class +".");
    }
    searchMultiCity(from1, to1, leaving1, from2, to2, leaving2, from3, to3, leaving3,
                    from4, to4, leaving4, adult, child, typePers, business_class){

        console.log("You make a return way search : \nFrom : " +
            ", \nDestination 1 : " +
            ", From : " + from1 +
            ", To : " + to1 +
            ", Leaving Data : " + leaving1 +
            ", \nDestination 2 : " +
            ", From : " + from2 +
            ", To : " + to2 +
            ", Leaving Data : " + leaving2 +
            ", \nDestination 3 : " +
            ", From : " + from3 +
            ", To : " + to3 +
            ", Leaving Data : " + leaving3 +
            ", \nDestination 4 : " +
            ", From : " + from4 +
            ", To : " + to4 +
            ", Leaving Data : " + leaving4 +
            ", \nAdults : " + adult +
            ", \nChild : " + child +
            ", \nTypePerson : " + typePers +
            ", \nClass : " + business_class +".");
    }

    openRequestedPopup(flght:any, modal) {
        this.flght = flght;
        this.modalService.open(modal);
    }

}
