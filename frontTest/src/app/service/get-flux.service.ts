import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetFluxService {

  private URL_FLUX ="../../assets/flux.json";
  constructor(private httpClient:HttpClient) { 
  }

  public getFlux(){
    // return this.httpClient.get('assets/flux.json').map((res: any) => {
    //   let response: any = res;
    //   return response.map((item: any) => new dataDto());
    // });
    return this.httpClient.get('assets/flux.json');
  }
}
