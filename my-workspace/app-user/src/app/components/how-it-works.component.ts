import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  template: `
    <section class="how">
      <div class="inner">
        <h2>Optioners Challenge Process</h2>
        <div class="steps">
          <div class="step">
            <h3>Take the challenge</h3>
            <p>
              Take the challenge through a demo account evaluation process and
              see if you have what it takes to be a live simulated trader.
            </p>
          </div>
          <div class="step">
            <h3>Evaluation Phases</h3>
            <p>
              If you pass the first challenge, you will establish yourself as a
              consistent trader and move to the verification step with a 5%
              simulated gain target.
            </p>
          </div>
          <div class="step">
            <h3>Get Funded</h3>
            <p>
              Once proven you can successfully and consistently trade, you reach
              the Funded stage where you get to make actual money.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .how {
        padding: 2rem 1rem;
        background: #f8fafc;
      }
      .inner {
        max-width: 1100px;
        margin: 0 auto;
      }
      .steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .step {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
      }
    `,
  ],
})
export class HowItWorksComponent {}
