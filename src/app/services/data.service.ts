import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Ship} from '../models/ship';
import { Pilot } from '../models/pilot';
import { Vehicle } from '../models/vehicle';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    private url = 'http://swapi.dev/api/';
    private shipData: any = {};
    private shipData2: any = {};
    private shipData3: any = {};
    private shipData4: any = {};

    private pilotData: any = {};
    private pilotData2: any = {};
    private pilotData3: any = {};
    private pilotData4: any = {};
    private pilotData5: any = {};
    private pilotData6: any = {};
    private pilotData7: any = {};
    private pilotData8: any = {};

    private vehicleData: any = {};
    private vehicleData2: any = {};
    private vehicleData3: any = {};
    private vehicleData4: any = {};

    ships: Ship[];
    pilots: Pilot[];
    vehicles: Vehicle[];

    isLoaded = new Subject<any>();
    isLoadedAsObservable = this.isLoaded.asObservable();

    constructor(private http: HttpClient) {
        this.initData();
    }

    initData() {
        this.getShipData();
        this.getPilotData();
        this.getVehicleData();
    }

    // Fetch starship data from the swapi
    private getShipData() {
        const shipData = sessionStorage.getItem('ships');
        const shipData2 = sessionStorage.getItem('ships2');
        const shipData3 = sessionStorage.getItem('ships3');
        const shipData4 = sessionStorage.getItem('ships4');

        if (shipData === null) {
                this.getOneShip(1)
                .subscribe(res => {
                    this.shipData =res;
                    sessionStorage.setItem('ships', JSON.stringify(this.shipData));
                    this.isLoaded.next();
                });
        } else {
            this.shipData = JSON.parse(shipData);
            setTimeout(() => this.isLoaded.next());
        }
        // 2
        if (shipData2 === null) {
            this.getOneShip(2)
            .subscribe(res => {
                this.shipData2 =res;
                sessionStorage.setItem('ships2', JSON.stringify(this.shipData2));
                this.isLoaded.next();
            });
    } else {
        this.shipData2 = JSON.parse(shipData2);
        setTimeout(() => this.isLoaded.next());
    }

    //3
    if (shipData3 === null) {
        this.getOneShip(3)
        .subscribe(res => {
            this.shipData3 =res;
            sessionStorage.setItem('ships3', JSON.stringify(this.shipData3));
            this.isLoaded.next();
        });
    } else {
    this.shipData3 = JSON.parse(shipData3);
    setTimeout(() => this.isLoaded.next());
    }

    //4
    if (shipData4 === null) {
        this.getOneShip(4)
        .subscribe(res => {
            this.shipData4 =res;
            sessionStorage.setItem('ships4', JSON.stringify(this.shipData4));
            this.isLoaded.next();
        });
    } else {
    this.shipData4 = JSON.parse(shipData4);
    setTimeout(() => this.isLoaded.next());
    }

    
}
    private getOneShip(i:number){
        return this.http.get<any>(this.url + 'starships/?page='+i);
    }
    // Fetch pilot data from the swapi
    private getPilotData() {
        const pilotData = sessionStorage.getItem('pilots');
        const pilotData2 = sessionStorage.getItem('pilots2');
        const pilotData3 = sessionStorage.getItem('pilots3');
        const pilotData4 = sessionStorage.getItem('pilots4');
        const pilotData5 = sessionStorage.getItem('pilots5');
        const pilotData6 = sessionStorage.getItem('pilots6');
        const pilotData7 = sessionStorage.getItem('pilots7');
        const pilotData8 = sessionStorage.getItem('pilots8');

        if (pilotData === null) {
                this.getOnePilot(1)
                .subscribe(res => {
                    this.pilotData = res;
                    sessionStorage.setItem('pilots', JSON.stringify(this.pilotData));
                    this.isLoaded.next();
                });
        } else {
            this.pilotData = JSON.parse(pilotData);
            setTimeout(() => this.isLoaded.next());
        }
        //2
        if (pilotData2 === null) {
            this.getOnePilot(2)
            .subscribe(res => {
                this.pilotData2 = res;
                sessionStorage.setItem('pilots2', JSON.stringify(this.pilotData2));
                this.isLoaded.next();
            });
    } else {
        this.pilotData2 = JSON.parse(pilotData2);
        setTimeout(() => this.isLoaded.next());
    }
    //3
    if (pilotData3 === null) {
        this.getOnePilot(3)
        .subscribe(res => {
            this.pilotData3 = res;
            sessionStorage.setItem('pilots3', JSON.stringify(this.pilotData3));
            this.isLoaded.next();
        });
        } else {
            this.pilotData3 = JSON.parse(pilotData3);
            setTimeout(() => this.isLoaded.next());
        }
    //4
    if (pilotData4 === null) {
        this.getOnePilot(4)
        .subscribe(res => {
            this.pilotData4 = res;
            sessionStorage.setItem('pilots4', JSON.stringify(this.pilotData4));
            this.isLoaded.next();
        });
        } else {
            this.pilotData4 = JSON.parse(pilotData4);
            setTimeout(() => this.isLoaded.next());
        }
    //5
    if (pilotData5 === null) {
        this.getOnePilot(5)
        .subscribe(res => {
            this.pilotData5 = res;
            sessionStorage.setItem('pilots5', JSON.stringify(this.pilotData5));
            this.isLoaded.next();
        });
        } else {
            this.pilotData5 = JSON.parse(pilotData5);
            setTimeout(() => this.isLoaded.next());
        }
        //6
        if (pilotData6 === null) {
            this.getOnePilot(6)
            .subscribe(res => {
                this.pilotData6 = res;
                sessionStorage.setItem('pilots6', JSON.stringify(this.pilotData6));
                this.isLoaded.next();
            });
    } else {
        this.pilotData6 = JSON.parse(pilotData6);
        setTimeout(() => this.isLoaded.next());
    }

    //7
    if (pilotData7 === null) {
        this.getOnePilot(7)
        .subscribe(res => {
            this.pilotData7 = res;
            sessionStorage.setItem('pilots7', JSON.stringify(this.pilotData7));
            this.isLoaded.next();
        });
    } else {
        this.pilotData7 = JSON.parse(pilotData7);
        setTimeout(() => this.isLoaded.next());
    }
    //8
    if (pilotData8 === null) {
        this.getOnePilot(8)
        .subscribe(res => {
            this.pilotData8 = res;
            sessionStorage.setItem('pilots8', JSON.stringify(this.pilotData8));
            this.isLoaded.next();
        });
    } else {
        this.pilotData8 = JSON.parse(pilotData8);
        setTimeout(() => this.isLoaded.next());
    }
    }



    private getOnePilot(i:number){
        return this.http.get<any>(this.url + 'people/?page='+i);
    }

    // Fetch vehicle data from the swapi
    private getVehicleData() {
        const vehicleData = sessionStorage.getItem('vehicles');
        const vehicleData2 = sessionStorage.getItem('vehicles2');
        const vehicleData3 = sessionStorage.getItem('vehicles3');
        const vehicleData4 = sessionStorage.getItem('vehicles4');


        if (vehicleData === null) {
            this.getOneVehicule(1)
                .subscribe(res => {
                    this.vehicleData = res;
                    sessionStorage.setItem('vehicles', JSON.stringify(this.vehicleData));
                    this.isLoaded.next();
                });
        } else {
            this.vehicleData = JSON.parse(vehicleData);
            setTimeout(() => this.isLoaded.next());
        }
        //2
        if (vehicleData2 === null) {
            this.http.get<any>(this.url + 'vehicles/') 
                .subscribe(res => {
                    this.vehicleData2 = res;
                    sessionStorage.setItem('vehicles2', JSON.stringify(this.vehicleData2));
                    this.isLoaded.next();
                });
        } else {
            this.vehicleData2 = JSON.parse(vehicleData2);
            setTimeout(() => this.isLoaded.next());
        }
        //3
        if (vehicleData3 === null) {
            this.http.get<any>(this.url + 'vehicles/') 
                .subscribe(res => {
                    this.vehicleData3 = res;
                    sessionStorage.setItem('vehicles3', JSON.stringify(this.vehicleData3));
                    this.isLoaded.next();
                });
        } else {
            this.vehicleData3 = JSON.parse(vehicleData3);
            setTimeout(() => this.isLoaded.next());
        }
        //4
        if (vehicleData4 === null) {
            this.http.get<any>(this.url + 'vehicles/') 
                .subscribe(res => {
                    this.vehicleData4 = res;
                    sessionStorage.setItem('vehicles4', JSON.stringify(this.vehicleData4));
                    this.isLoaded.next();
                });
        } else {
            this.vehicleData4 = JSON.parse(vehicleData4);
            setTimeout(() => this.isLoaded.next());
        }

    }

    private getOneVehicule(i:number){
        return this.http.get<any>(this.url + 'vehicles/?page='+i);
    }

     // API images
     rechercheImages(titre): Observable<any>{
        return new Observable(
             observer => {
               this.http.get("https://api.unsplash.com/search/photos?query="+titre+"&client_id=j-Xgo3YlAP8UM1HlMP4-AHr1fTP6AOwt4tGWN8eqN18")
                 .subscribe(data => {
                   if(!data["results"]) {
                     observer.error("Aucune image trouvée")
                   }
                   else {
                     observer.next(data["results"]);
                     observer.complete();
                   }
                 });
             }
           );
       }

    getShips(): Ship[] {
        return this.shipData.results;
    }
    getShips2(): Ship[] {
        return this.shipData2.results;
    }
    getShips3(): Ship[] {
        return this.shipData3.results;
    }
    getShips4(): Ship[] {
        return this.shipData4.results;
    }
    // Les pilotes
    getPilots(): Pilot[] {

        return this.pilotData.results;
    }
    getPilots2(): Pilot[] {

        return this.pilotData2.results;
    }
    getPilots3(): Pilot[] {

        return this.pilotData3.results;
    }
    getPilots4(): Pilot[] {

        return this.pilotData4.results;
    }
    getPilots5(): Pilot[] {

        return this.pilotData5.results;
    }
    getPilots6(): Pilot[] {

        return this.pilotData6.results;
    }
    getPilots7(): Pilot[] {

        return this.pilotData7.results;
    }
    getPilots8(): Pilot[] {

        return this.pilotData8.results;
    }

    // Les vehicles 

    getVehicles(): Vehicle[] {
        return this.vehicleData.results;
    }

    getVehicles2(): Vehicle[] {
        return this.vehicleData2.results;
    }

    getVehicles3(): Vehicle[] {
        return this.vehicleData3.results;
    }

    getVehicles4(): Vehicle[] {
        return this.vehicleData4.results;
    }
   
}
