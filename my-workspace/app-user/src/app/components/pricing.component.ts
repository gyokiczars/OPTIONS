import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  standalone: true,
  template: `
    <section class="pricing">
      <div class="inner">
        <h2>Choose your Best Plan</h2>
        <div class="toggles">
          <button (click)="select('1')" [class.active]="selected === '1'">
            1-Step
          </button>
          <button (click)="select('2')" [class.active]="selected === '2'">
            2-Step
          </button>
        </div>
        <div class="plans">
          <div class="plan" *ngFor="let p of plans">
            <h3>{{ p.size }}</h3>
            <div class="fee">{{ p.fee }}</div>
            <div class="desc">Challenge Fee</div>
            <button class="btn primary">Get Funded</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .pricing {
        padding: 2rem 1rem;
      }
      .toggles {
        display: inline-flex;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 1rem;
      }
      .toggles button {
        padding: 0.6rem 1rem;
        border: none;
        background: #eef2f6;
      }
      .toggles button.active {
        background: #00bfa5;
        color: #042022;
      }
      .plans {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1rem;
      }
      .plan {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
      }
      .fee {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    `,
  ],
})
export class PricingComponent {
  selected = '1';
  plans = [
    { size: '$50k', fee: '$100' },
    { size: '$100k', fee: '$250' },
    { size: '$150k', fee: '$500' },
  ];

  select(s: string) {
    this.selected = s;
  }
}
