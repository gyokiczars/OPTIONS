import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="inner">
        <div class="eyebrow">The one and only</div>
        <h1>The future of retail<br />Option trading</h1>
        <p>
          Why risk your own capital when you can trade with our virtual capital
          and receive up to <strong>90% of your simulated gains</strong>
        </p>
        <div class="ctas">
          <button class="btn primary">Get Started</button>
          <button class="btn outline">Join our discord</button>
        </div>
        <div class="hero-images">
          <!-- placeholder images -->
          <img src="assets/hero-1.png" alt="app preview" />
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 4rem 1rem;
        background: linear-gradient(180deg, #0f172a, #061228);
        color: #fff;
      }
      .inner {
        max-width: 1100px;
        margin: 0 auto;
        text-align: center;
      }
      .eyebrow {
        opacity: 0.8;
        margin-bottom: 1rem;
      }
      h1 {
        font-size: 2.5rem;
        margin: 0.2rem 0;
      }
      .ctas {
        margin-top: 1.2rem;
      }
      .btn {
        padding: 0.8rem 1.2rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: transparent;
        color: #fff;
      }
      .btn.primary {
        background: #00bfa5;
        color: #042022;
        border: none;
      }
      .btn.outline {
        background: transparent;
      }
      .hero-images img {
        max-width: 100%;
        margin-top: 2rem;
      }
    `,
  ],
})
export class HeroComponent {}
