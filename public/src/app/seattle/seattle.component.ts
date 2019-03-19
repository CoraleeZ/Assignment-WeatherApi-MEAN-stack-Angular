import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit,OnDestroy {
  weatherinfo:any={};
  subscription: any;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _cityweather:HttpService
    ) { }

    ngOnInit() {
    this.subscription=this.getInfoFromApi();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }


    getInfoFromApi(){
      this._route.params.subscribe((params: Params) => {
        console.log('city name:',params['cityname']);

        let nameofcity=params['cityname']
        this._cityweather.getCity(nameofcity)
        .subscribe(data=>{
        console.log('cityweatherinfo :',data);
        this.weatherinfo=data;
        });
    });
    }

    // goHome() {
    //   this._router.navigate(['/home']);
    // }
}
