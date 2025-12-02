import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowItWorksComponent } from './components/how-it-works.component';
import { PricingComponent } from './components/pricing.component';
import { RulesComponent } from './components/rules.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    TopbarComponent,
    HeroComponent,
    FeaturesComponent,
    HowItWorksComponent,
    PricingComponent,
    RulesComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'options';
}
