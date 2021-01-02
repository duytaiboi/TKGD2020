import { Injectable, EventEmitter } from '@angular/core';
import { RegulationModel } from '../model/regulation.model';
import { AgencyModel } from '../model/agency.model';

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    regulation: RegulationModel;
    listAgency: AgencyModel[] = [];
    numberOfAgencyType: number;

    getRegulation() {
        return this.regulation;
    }
    setRegulation(value: any) {
        this.regulation = {...value};
    }
    getlistAgency() {
        return this.listAgency;
    }
    setlistAgency(value: AgencyModel[]) {
        this.listAgency = {...value};
    }
    getNumberOfAgencyType() {
        return this.numberOfAgencyType;
    }
    setNumberOfAgencyType(value: number) {
        this.numberOfAgencyType = value;
    }
}
