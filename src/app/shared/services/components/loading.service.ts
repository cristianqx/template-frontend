import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isOpen = false;

  constructor() {
  }

  toggle() {

    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  open() {

  }

  close() {

  }
}
