import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Imports
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api'; // For navigation items
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PanelModule,
    TieredMenuModule,
    InputTextModule,
    TableModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  // Navigation links for the main menu
  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: ['/home'] },
    { label: 'Challenges', routerLink: ['/challenges'] },
    { label: 'Trading', routerLink: ['/trading'] },
    { label: 'Pricing', routerLink: ['/pricing'] },
    { label: 'About us', routerLink: ['/about'] },
  ];

  pricingPlans = [
    { name: '$50k', fee: '$100', key: '1-Step' },
    { name: '$100k', fee: '$250', key: '2-Step' },
    { name: '$150k', fee: '$500', key: '2-Step' },
  ];

  // Logic for theme switching would go here
  toggleTheme() {
    // In a real app, this would change a CSS link or class on the body
    console.log('Theme toggled!');
  }
}
