import { BaseHtmlComponent } from '../base-component';
import './numeric-input.scss';

export abstract class BaseNumericInputHtmlComponent extends BaseHtmlComponent {
  private increaseButtonDomElementId: string;
  private increaseButtonDomElement: HTMLElement;
  private decreaseButtonDomElementId: string;
  private decreaseButtonDomElement: HTMLElement;
  private valueDomElementId: string;
  private valueDomElement: HTMLElement;
  private containerId: string;
  private value: number;

  constructor() {
    super();
    this.increaseButtonDomElementId = this.generateId();
    this.decreaseButtonDomElementId = this.generateId();
    this.valueDomElementId = this.generateId();
    this.containerId = this.generateId();
  }

  preInsertHtml(): void {
    this.value = this.getInitialValue();
  }

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="increase-decrease-value-container">
        <span id="${this.decreaseButtonDomElementId}" class="increase-value">-</span>
        <span id="${this.valueDomElementId}" class="value">${this.value}</span>
        <span id="${this.increaseButtonDomElementId}" class="decrease-value">+</span>
      </div>
    `;
  }

  postInsertHtml() {
    this.increaseButtonDomElement = document.getElementById(this.increaseButtonDomElementId);
    this.decreaseButtonDomElement = document.getElementById(this.decreaseButtonDomElementId);
    this.valueDomElement = document.getElementById(this.valueDomElementId);
    this.increaseButtonDomElement.addEventListener('click', () => this.updateValue(1));
    this.decreaseButtonDomElement.addEventListener('click', () => this.updateValue(-1));
  }

  private updateValue(valueChange: number) {
    this.value += valueChange;
    this.valueDomElement.innerHTML = `${this.value}`;
    this.onUpdate(this.value);
  }

  abstract onUpdate(newValue: number);
  abstract getInitialValue();
}
