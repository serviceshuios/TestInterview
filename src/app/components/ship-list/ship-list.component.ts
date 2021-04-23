import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Ship } from 'src/app/models/ship';
import '../../../styles.css';

@Component({
    selector: 'app-ship-list',
    templateUrl: './ship-list.component.html'
})
export class ShipListComponent implements OnInit {
    @Output() shipSelected = new EventEmitter<Ship>();
    
    ships: Ship[];
    ships2: Ship[];
    ships3: Ship[];
    ships4: Ship[];

    public images :any;

    constructor(private data: DataService) { }

    ngOnInit() {

        this.data.rechercheImages("starwars")
        .subscribe(
              value => {
                this.images=value;
              }
            );

        this.ships = this.data.getShips();
        this.ships2 = this.data.getShips2();
        this.ships3 = this.data.getShips3();
        this.ships4 = this.data.getShips4();
    }

    // When a ship is selected, emit the details so they can be displayed in ship-details
    getShipDetails(ship: Ship) {
        this.shipSelected.emit(ship);
    }
}