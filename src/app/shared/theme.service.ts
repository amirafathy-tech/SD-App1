import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // constructor() { }

  private isDarkMode = false;

  // toggleTheme(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   if (this.isDarkMode) {
  //     document.body.classList.add('dark-theme');
  //   } else {
  //     document.body.classList.remove('dark-theme');
  //   }
  // }
  // toggleTheme(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  //   document.body.classList.toggle('dark-theme', this.isDarkMode);
  // }
  
  // loadTheme(): void {
  //   const savedTheme = localStorage.getItem('theme');
  //   this.isDarkMode = savedTheme === 'dark';
  //   document.body.classList.toggle('dark-theme', this.isDarkMode);
  // }

  // private currentTheme: string = 'light';

  // constructor() {
  //   const savedTheme = localStorage.getItem('theme');
  //   this.currentTheme = savedTheme ? savedTheme : 'light';
  //   document.body.classList.add(this.currentTheme);
  // }

  // getTheme(): string {
  //   return this.currentTheme;
  // }

  // toggleTheme(): void {
  //   this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  //   this.isDarkMode = !this.isDarkMode;
  //   // Apply the theme
  //   document.body.classList.toggle('dark', this.currentTheme === 'dark');
  //   document.body.classList.toggle('light', this.currentTheme === 'light');

  //   // Save to localStorage
  //   localStorage.setItem('theme', this.currentTheme);
  // }

  private readonly THEME_KEY = 'user-theme';
  private readonly LIGHT_THEME = 'lara-light-blue';
  private readonly DARK_THEME = 'lara-dark-blue';

  constructor() {}

  // Get the current theme
  getCurrentTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || this.LIGHT_THEME;
  }

  // Toggle between light and dark themes
  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme =
      currentTheme === this.LIGHT_THEME ? this.DARK_THEME : this.LIGHT_THEME;
    this.setTheme(newTheme);
  }

  // Set the theme
  setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  // Apply the theme to the document
  private applyTheme(theme: string): void {
    // const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    // if (themeLink) {
    //   themeLink.href = `node_modules/primeng/resources/themes/${theme}/theme.css`;
    // }
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    console.log(themeLink);
    
  if (themeLink) {
    themeLink.href = `node_modules/primeng/resources/themes/${theme}/theme.css`;
  }

  if (theme === this.DARK_THEME) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  }

  
}
