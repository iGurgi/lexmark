import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class StateService {
  $master: boolean = false;
  $bsd: boolean = false;
  $previously: boolean = false;
  $country: boolean = false;
  $geo: boolean = false;
  $competitor: boolean = false;
  $director: boolean = false;
  $impact: boolean = false;

  constructor() { }

}