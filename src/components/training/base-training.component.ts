import './training.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { IHtmlComponent } from '../_core/component.interface';

export abstract class BaseTrainingHtmlComponent extends BaseHtmlComponent {
  protected array: IHtmlComponent[] = [];

  toHtml() {
    return /* html */ `
      <span class="training-title">Training lessons</span>
      <div class="training-container">
        ${this.array.map((k) => k.toHtml()).join('')}
      </div>
    `;
  }

  postInsertHtml(): void {
    this.array.forEach((c) => c.postInsertHtml());
  }
}
