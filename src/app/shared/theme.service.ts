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
  
  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  private currentTheme: string = 'light';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.currentTheme = savedTheme ? savedTheme : 'light';
    document.body.classList.add(this.currentTheme);
  }

  getTheme(): string {
    return this.currentTheme;
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.isDarkMode = !this.isDarkMode;
    // Apply the theme
    document.body.classList.toggle('dark', this.currentTheme === 'dark');
    document.body.classList.toggle('light', this.currentTheme === 'light');

    // Save to localStorage
    localStorage.setItem('theme', this.currentTheme);
  }

  
}
