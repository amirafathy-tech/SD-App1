import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { ThemeService } from '../shared/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslatationService } from '../shared/translatation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy  {

  isDarkMode: boolean;

  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(private translationService:TranslatationService,private authService: AuthService,private themeService: ThemeService,private translate: TranslateService) {
    this.isDarkMode = this.themeService.getTheme() === 'dark';
  }

  switchLanguage(lang: string) {
    this.translationService.changeLang(lang);
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getTheme() === 'dark';
  }


  
  ngOnInit() {
    this.userSub = this.authService.loggedInUser.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
