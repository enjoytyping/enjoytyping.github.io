import './welcome-message-dialog.scss';
import { BaseDialogHtmlComponent } from '../_core/dialog/base-dialog-component';
import { IAppStateClient } from '../../state/app-state.client.interface';

export class WelcomeMessageDialogHtmlComponent extends BaseDialogHtmlComponent {
  constructor(private appStateClient: IAppStateClient) {
    super();
  }

  preInsertHtml() {
    super.preInsertHtml();
  }

  getDialogCssClass(): string {
    return 'welcome-message-dialog';
  }

  getDialogTitle(): string {
    return 'Welcome to Enjoy Typing';
  }

  getDialogBody(): string {
    return /* html */ `
      <p>We are happy to have you on board and hope you find our website useful. In this website, you can improve your typing skills while writing <b>quotes</b>, <b>poems</b>, <b>stories</b> and much more 🙂</p>
      <p class="enjoy">
        <span class="letter E"><span>E</span></span>
        <span class="letter N"><span>N</span></span>
        <span class="letter J"><span>J</span></span>
        <span class="letter O"><span>O</span></span>
        <span class="letter Y"><span>Y</span></span>
        <span class="letter exclamation"><span>!</span></span>
      </p>
    `;
  }

  getDialogFooter(): string {
    return '';
  }

  postInsertHtml() {
    super.postInsertHtml();
    const appState = this.appStateClient.getAppState();
    if (appState.visitWebsiteForTheFirstTime) {
      this.show();
      appState.visitWebsiteForTheFirstTime = false;
      this.appStateClient.saveAppState(appState);
    }
  }
}
