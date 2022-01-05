import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Configuration {
  public RICK_MORTY_URL = 'https://rickandmortyapi.com';
}

@Injectable()
export class Constants {
}

@Injectable({
  providedIn: 'root'
})
export class ApiEndPoints {

  public DATA;


  constructor(private configuration: Configuration) {

    this.DATA  = this.configuration.RICK_MORTY_URL+ '/api/character/{id}'

  }
}
