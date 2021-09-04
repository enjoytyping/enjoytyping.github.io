import './cookies-consentement.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { AppStateClient } from '../../state/app-state.client';

export class CookiesConsentementHtmlComponent extends BaseHtmlComponent {
  private containerId: string;
  private container: HTMLElement;
  private buttonId: string;
  private button: HTMLElement;

  constructor(private appStateClient: IAppStateClient = AppStateClient.getInstance()) {
    super();
  }

  preInsertHtml(): void {
    this.containerId = this.generateId();
    this.buttonId = this.generateId();
  }

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="cookies-consentement-container">
        <div class="cookies-consentement-left">
          <p class="cookies-consentement-header">
            This website uses cookies
          </p>
          <p class="cookies-consentement-msg">
            We use cookies to personalize ads and to analyse our traffic. 
            We also share information about your use of our site with our advertising and analytics partners 
            who may combine it with other information that you’ve provided to them or that they’ve collected from your use 
            of their services.
          </p>
        </div>
        <button id="${this.buttonId}">Allow all cookies</button> 
      </div>
    `;
  }

  postInsertHtml(): void {
    this.container = document.getElementById(this.containerId);
    this.button = document.getElementById(this.buttonId);
    setTimeout(() => {
      const appState = this.appStateClient.getAppState();
      if (!appState.cookiesConsentementAlreadyShown) {
        this.container.classList.add('active');
      }
    }, 2000);
    this.button.addEventListener('click', this.handleButtonClickEvent.bind(this));
  }

  private handleButtonClickEvent() {
    this.container.classList.remove('active');
    const appState = this.appStateClient.getAppState();
    appState.cookiesConsentementAlreadyShown = true;
    this.appStateClient.saveAppState(appState);
  }
}
