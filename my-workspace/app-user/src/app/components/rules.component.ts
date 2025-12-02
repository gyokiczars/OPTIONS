import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  standalone: true,
  template: `
    <section class="rules">
      <div class="inner">
        <h2>Rules / Features</h2>
        <div class="rule-grid">
          <div class="rule">
            <h4>Profit Target</h4>
            <div class="value">10%</div>
            <p>
              A profit target means that a trader reaches a profit in the sum of
              closed positions on the assigned trading account anytime within
              the unlimited Trading Period.
            </p>
          </div>
          <div class="rule">
            <h4>Daily loss limit</h4>
            <div class="value">4%</div>
            <p>
              Trader's daily stop-loss. According to our rules, this is set as
              5% from the initial account balance.
            </p>
          </div>
          <div class="rule">
            <h4>Overall loss limit</h4>
            <div class="value">10%</div>
            <p>
              Account stop-loss: equity must not decline below 90% of the
              initial account balance.
            </p>
          </div>
          <div class="rule">
            <h4>Payout schedule</h4>
            <div class="value">14 days</div>
            <p>
              You can request a payout of your simulated gains every 14 calendar
              days.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .rules {
        padding: 2rem 1rem;
      }
      .rule-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .rule {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
      }
      .value {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class RulesComponent {}
