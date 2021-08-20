import './training.scss';
import { BaseHtmlComponent } from '../_core/base-component';

export class TrainingKeysHtmlComponent extends BaseHtmlComponent {
  constructor(private keys: string) {
    super();
  }

  preInsertHtml(): void {
    // nothing to do
  }

  toHtml() {
    return /* html */ `
      <div class="training-keys-container">
      <span class="keys">${this.keys}</span>
        <span>Keys</span>
      </div>
    `;
  }

  postInsertHtml(): void {
    // nothing to do
  }
}
