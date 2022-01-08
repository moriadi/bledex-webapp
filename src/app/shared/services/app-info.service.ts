import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Apolo 1.0';
  }
}
