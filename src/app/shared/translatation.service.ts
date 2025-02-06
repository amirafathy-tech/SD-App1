import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatationService {

  defaultLang="en";
 
  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLang);
  }

  changeLang(lang: string) {
    this.setLanguage(lang);
    localStorage.setItem('language', lang); 
  }

  private setLanguage(lang: string) {
    this.translate.use(lang);
    this.defaultLang = lang;

    // Change direction
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = dir;
    this.document.documentElement.lang = lang;
  }
   
}
