import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Ship} from 'src/app/models/ship';
import '../../../styles.css';
import { Pilot } from 'src/app/models/pilot';

@Component({
    selector: 'app-ship-details',
    templateUrl: './ship-details.component.html'
})
export class ShipDetailsComponent implements OnInit {
    @Output() pilotSelected = new EventEmitter<any>();
    @Output() returnToShipList = new EventEmitter<any>();
    @Input() ship: Ship;

    pilots: Pilot[];
    pilots2: Pilot[];
    pilots3: Pilot[];
    pilots4: Pilot[];
    pilots5: Pilot[];
    pilots6: Pilot[];
    pilots7: Pilot[];
    pilots8: Pilot[];

    constructor(private data: DataService) { }

    ngOnInit() {
        this.pilots = this.data.getPilots();
        this.pilots2 = this.data.getPilots2();
        this.pilots3 = this.data.getPilots3();
        this.pilots4 = this.data.getPilots4();
        this.pilots5 = this.data.getPilots5();
        this.pilots6 = this.data.getPilots6();
        this.pilots7 = this.data.getPilots7();
        this.pilots8 = this.data.getPilots8();
    }

    // Use the pilot url to find the correct pilot and return the name
    getPilotName(pilotUrl: string) {
        const pilotDetails = this.pilots.find(pilot => pilot.url === pilotUrl);
        const pilotDetails2 = this.pilots2.find(pilot => pilot.url === pilotUrl);
        const pilotDetails3 = this.pilots3.find(pilot => pilot.url === pilotUrl);
        const pilotDetails4= this.pilots4.find(pilot => pilot.url === pilotUrl);
        const pilotDetails5= this.pilots5.find(pilot => pilot.url === pilotUrl);
        const pilotDetails6= this.pilots6.find(pilot => pilot.url === pilotUrl);
        const pilotDetails7= this.pilots7.find(pilot => pilot.url === pilotUrl);
        const pilotDetails8= this.pilots8.find(pilot => pilot.url === pilotUrl);

        return (!!pilotDetails ? pilotDetails.name : '') || 
               (!!pilotDetails2 ? pilotDetails2.name : '') ||
               (!!pilotDetails3 ? pilotDetails3.name : '') ||
               (!!pilotDetails3 ? pilotDetails3.name : '') ||
               (!!pilotDetails4 ? pilotDetails4.name : '') ||
               (!!pilotDetails5 ? pilotDetails5.name : '') ||
               (!!pilotDetails6 ? pilotDetails6.name : '') ||
               (!!pilotDetails7 ? pilotDetails7.name : '') ||
               (!!pilotDetails8 ? pilotDetails8.name : '') ;
    }

    // When a pilot is selected, emit the details so they can be displayed in pilot-details
    getPilotDetails(pilotUrl: string) {
        const pilotDetails = this.pilots.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails);
        
        const pilotDetails2 = this.pilots2.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails2);

        const pilotDetails3 = this.pilots3.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails3);

        const pilotDetails4 = this.pilots4.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails4);

        const pilotDetails5 = this.pilots5.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails5);

        const pilotDetails6 = this.pilots6.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails6);

        const pilotDetails7 = this.pilots7.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails7);

        const pilotDetails8 = this.pilots8.find(pilot => pilot.url === pilotUrl);
        this.pilotSelected.emit(pilotDetails8);


    }

    back() {
        this.returnToShipList.emit();
    }
}