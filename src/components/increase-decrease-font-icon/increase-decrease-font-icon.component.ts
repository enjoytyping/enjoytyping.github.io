import './increase-decrease-font-icon.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { AppStateClient } from '../../state/app-state.client';
import { CHANGE_FONT_SIZE_EVENT } from '../../constants/constant';

const INCREASE_FONT_ICON_ID = 'INCREASE_FONT_ICON_ID';
const DECREASE_FONT_ICON_ID = 'DECREASE_FONT_ICON_ID';
const FONT_SIZE_ID = 'FONT_SIZE_ID';

export class IncreaseDecreaseFontIconHtmlComponent extends BaseHtmlComponent {
  private increaseFontButtonDomElement: HTMLElement;
  private decreaseFontButtonDomElement: HTMLElement;
  private fontSizeDomElement: HTMLElement;
  private containerId: string;
  private fontSize: number;

  constructor(private appStateClient: IAppStateClient = AppStateClient.getInstance()) {
    super();
    this.containerId = this.generateId();
  }

  preInsertHtml(): void {
    const appState = this.appStateClient.getAppState();
    this.fontSize = appState.fontSize;
  }

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="increase-decrease-font-icon-container">
        <span id="${DECREASE_FONT_ICON_ID}" class="increase-font-icon" title="Decrease font size">-</span>
        <span id="${FONT_SIZE_ID}" class="font-size">${this.fontSize}</span>
        <span id="${INCREASE_FONT_ICON_ID}" class="decrease-font-icon" title="Increase font size">+</span>
      </div>
    `;
  }

  postInsertHtml() {
    this.increaseFontButtonDomElement = document.getElementById(INCREASE_FONT_ICON_ID);
    this.decreaseFontButtonDomElement = document.getElementById(DECREASE_FONT_ICON_ID);
    this.fontSizeDomElement = document.getElementById(FONT_SIZE_ID);
    this.increaseFontButtonDomElement.addEventListener('click', () => this.updateFontSize(1));
    this.decreaseFontButtonDomElement.addEventListener('click', () => this.updateFontSize(-1));
  }

  private updateFontSize(fontSizeChange: number) {
    this.fontSize += fontSizeChange;
    this.fontSizeDomElement.innerHTML = `${this.fontSize}`;
    const appState = this.appStateClient.getAppState();
    appState.fontSize = this.fontSize;
    this.appStateClient.saveAppState(appState);
    this.dispatchCustomEvent(CHANGE_FONT_SIZE_EVENT);
  }
}
