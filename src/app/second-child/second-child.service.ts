import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SecondChildService {

  constructor(private _http:Http) { }


  getAvatar() {
    return this._http.get('http://choniawko.com/api/any-user')
      .map(res => res.json())
      .do(res => console.log('res', res))
      .map((body:any) => body.avatar)
      
  }
}
