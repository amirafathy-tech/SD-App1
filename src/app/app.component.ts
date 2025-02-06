import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslatationService } from './shared/translatation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //defaultLang="en";
  title = 'BTP-SD-APP';
  constructor(private themeService: ThemeService,private translate: TranslateService,private translationService: TranslatationService) {
  }
 

  ngOnInit(): void {
    this.themeService.loadTheme();
  }
}
