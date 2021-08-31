import './side-panel.scss';
import { BaseHtmlComponent } from '../base-component';
import { CLOSE_SIDE_PANEL_EVENT, ESCAPE_KEY_CODE, OPEN_SIDE_PANEL_EVENT } from '../../../constants/constant';
import { IconHtmlComponent } from '../icon/icon.component';

export abstract class BaseSidePanelHtmlComponent extends BaseHtmlComponent {
  private containerId: string;
  private container: HTMLElement;
  private closeButton: IconHtmlComponent;
  private sidePanelId: string;
  private sidePanel: HTMLElement;
  private backgroundId: string;
  private background: HTMLElement;
  private callbacks: (() => void)[] = [];

  abstract getTitle(): string;
  abstract getBody(): string;
  abstract getSidePanelCssClass(): string;

  preInsertHtml(): void {
    this.closeButton = new IconHtmlComponent('clarity:window-close-line', 'close');
    this.closeButton.preInsertHtml();
    this.containerId = this.generateId();
    this.sidePanelId = this.generateId();
    this.backgroundId = this.generateId();
  }

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="container">
        <div class="side-panel-container ${this.getSidePanelCssClass()}">
          <div id="${this.sidePanelId}" class="side-panel">
            <div class="side-panel-header">
              <h2 class="side-panel-title">${this.getTitle()}</h2>
              ${this.closeButton.toHtml()}
            </div>
            ${this.getBody()}
          </div>
        </div>
        <div id="${this.backgroundId}" class="side-panel-background">
        </div>
      </div>
    `;
  }

  postInsertHtml(): void {
    this.container = document.getElementById(this.containerId);
    this.background = document.getElementById(this.backgroundId);
    this.sidePanel = document.getElementById(this.sidePanelId);
    this.background.addEventListener('click', this.handleSidePanelBackgroundClickEvent.bind(this));
    document.addEventListener('keydown', this.handleBackgroundKeyDownEvent.bind(this));
    this.closeButton.postInsertHtml();
    this.closeButton.onClick(this.handleCloseIconClickEvent.bind(this));
  }

  onClose(callback: () => void) {
    this.callbacks.push(callback);
  }

  open() {
    this.sidePanel.style.display = 'flex';
    this.container.classList.add('active');
    this.dispatchCustomEvent(OPEN_SIDE_PANEL_EVENT);
  }

  close() {
    this.container.classList.remove('active');
    this.dispatchCustomEvent(CLOSE_SIDE_PANEL_EVENT);
    this.callbacks.forEach((callback) => callback());
    setTimeout(() => (this.sidePanel.style.display = 'none'), 500);
  }

  private handleCloseIconClickEvent() {
    this.close();
  }

  private handleBackgroundKeyDownEvent(event) {
    if (event.keyCode == ESCAPE_KEY_CODE) {
      this.close();
    }
  }

  private handleSidePanelBackgroundClickEvent(event) {
    if (event.composedPath().indexOf(this.sidePanel) == -1) {
      this.close();
    }
  }
}
