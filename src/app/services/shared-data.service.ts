import { Injectable } from '@angular/core';
import { ArchiveVenteFilter } from '@app/models/archiveventefilter';
import { Livraison } from '@app/models/livraison';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SharedDataService {
  private messageSource = new BehaviorSubject('default');
  private ventefilterSource = new BehaviorSubject<ArchiveVenteFilter>(null);
  private livraisonSource = new BehaviorSubject<Livraison>(null);

  currentMessage = this.messageSource.asObservable();
  currentVenteFilter = this.ventefilterSource.asObservable();
  currentLivraison = this.livraisonSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  pushVenteFilter(venteFilter: ArchiveVenteFilter){
    this.ventefilterSource.next(venteFilter);
  }

  public pushLivraison(livraison: Livraison){
    this.livraisonSource.next(livraison);
  }

}