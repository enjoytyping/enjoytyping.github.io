import './side-panel.scss';
import { BaseHtmlComponent } from '../base-component';
import { CLOSE_SIDE_PANEL_EVENT, OPEN_SIDE_PANEL_EVENT } from '../../../constants/constant';

export abstract class BaseSidePanelHtmlComponent extends BaseHtmlComponent {
  private containerId: string;
  private container: HTMLElement;
  private sidePanelContainerId: string;
  private sidePanelContainer: HTMLElement;
  private sidePanelId: string;
  private sidePanel: HTMLElement;
  private backgroundId: string;
  private background: HTMLElement;
  private callbacks: (() => void)[] = [];

  abstract getTitle(): string;
  abstract getBody(): string;
  abstract getSidePanelCssClass(): string;

  preInsertHtml(): void {
    this.containerId = this.generateId();
    this.sidePanelContainerId = this.generateId();
    this.sidePanelId = this.generateId();
    this.backgroundId = this.generateId();
  }

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="container">
        <div id="${this.sidePanelContainerId}" class="side-panel-container ${this.getSidePanelCssClass()}">
          <div id="${this.sidePanelId}" class="side-panel">
            <h2 class="side-panel-title">${this.getTitle()}</h2>
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
    this.sidePanelContainer = document.getElementById(this.sidePanelContainerId);
    this.sidePanel = document.getElementById(this.sidePanelId);
    this.background.addEventListener('click', this.handleSidePanelBackgroundClickEvent.bind(this));
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

  private handleSidePanelBackgroundClickEvent(event) {
    if (event.composedPath().indexOf(this.sidePanel) == -1) {
      this.close();
    }
  }
}
