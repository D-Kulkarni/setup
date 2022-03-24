import { Injectable } from '@angular/core';
import { Country, State, City,   }  from 'country-state-city';
// import csc from 'country-state-city';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  /**
   * @returns all countries list
   */
  getAllCountries() {
    return Country.getAllCountries()
  }
/**
 * 
 * @param countryCode 
 * @returns returns state list by country code 
 */
  getStateByCountry(countryCode:string) {
    return State.getStatesOfCountry(countryCode)
  }

  getCitiesByState(countryCode:string,sateCode:string) {
   return City.getCitiesOfState(countryCode,sateCode)
  }

}
