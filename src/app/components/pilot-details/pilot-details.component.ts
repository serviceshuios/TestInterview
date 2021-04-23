import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Ship} from 'src/app/models/ship';
import '../../../styles.css';
import { Pilot } from 'src/app/models/pilot';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
    selector: 'app-pilot-details',
    templateUrl: './pilot-details.component.html'
})
export class PilotDetailsComponent implements OnInit {
    @Output() returnToShipDetails = new EventEmitter<any>();
    @Input() pilot: Pilot;

    ships: Ship[];
    ships2: Ship[];
    ships3: Ship[];
    ships4: Ship[];

    vehicles: Vehicle[];
    vehicles2: Vehicle[];
    vehicles3: Vehicle[];
    vehicles4: Vehicle[];

    constructor(private data: DataService) { }

    ngOnInit() {
        this.ships = this.data.getShips();
        this.ships2 = this.data.getShips2();
        this.ships3 = this.data.getShips3();
        this.ships4 = this.data.getShips4();

        this.vehicles = this.data.getVehicles();
        this.vehicles2 = this.data.getVehicles2();
        this.vehicles3 = this.data.getVehicles3();
        this.vehicles4 = this.data.getVehicles4();
    }

    // Use the ship url to find the correct ship and return the name
    getStarshipNames(shipUrl: string) {
        const shipDetails = this.ships.find(ship => ship.url === shipUrl);
        const shipDetails2 = this.ships2.find(ship => ship.url === shipUrl);
        const shipDetails3 = this.ships3.find(ship => ship.url === shipUrl);
        const shipDetails4 = this.ships4.find(ship => ship.url === shipUrl);

        return (!!shipDetails ? shipDetails.name : '') ||
               (!!shipDetails2 ? shipDetails2.name : '') ||
               (!!shipDetails3 ? shipDetails3.name : '') ||
               (!!shipDetails4 ? shipDetails4.name : '');
    }

    // Use the vehicle url to find the correct vehicle and return the name
    getVehicleNames(vehicleUrl: string) {
        const vehicleDetails = this.vehicles.find(vehicle => vehicle.url === vehicleUrl);
        const vehicleDetails2 = this.vehicles2.find(vehicle => vehicle.url === vehicleUrl);
        const vehicleDetails3 = this.vehicles3.find(vehicle => vehicle.url === vehicleUrl);
        const vehicleDetails4 = this.vehicles4.find(vehicle => vehicle.url === vehicleUrl);

        return (!!vehicleDetails ? vehicleDetails.name : '') ||
                (!!vehicleDetails2 ? vehicleDetails2.name : '') ||
                (!!vehicleDetails3 ? vehicleDetails3.name : '') ||
                (!!vehicleDetails4 ? vehicleDetails4.name : '');
    }

    back() {
        this.returnToShipDetails.emit();
    }
}