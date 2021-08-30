import { CHANGE_THEME_EVENT, DARK_THEME_VALUE, LIGHT_THEME_VALUE } from '../../constants/constant';
import { BaseHtmlComponent } from '../_core/base-component';
import { IAppStateClient } from '../../state/app-state.client.interface';

const CHANGE_TO_DARK_THEME_ICON_ID = 'CHANGE_TO_DARK_THEME_ICON_ID';
const CHANGE_TO_LIGHT_THEME_ICON_ID = 'CHANGE_TO_LIGHT_THEME_ICON_ID';

export class ChangeThemeIconHtmlComponent extends BaseHtmlComponent {
  private changeToDarkThemeButtonDomElement: HTMLElement;
  private changeToLightThemeButtonDomElement: HTMLElement;

  constructor(private appStateClient: IAppStateClient) {
    super();
  }

  preInsertHtml(): void {
    const appState = this.appStateClient.getAppState();
    appState.currentTheme = appState.currentTheme || LIGHT_THEME_VALUE;
    document.body.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);
    document.body.classList.add(appState.currentTheme);
    this.appStateClient.saveAppState(appState);
  }

  toHtml() {
    return /* html */ `
      <span tabindex="0" id='${CHANGE_TO_DARK_THEME_ICON_ID}' class='pointer change-theme-icon'>
        <span class='iconify' data-icon='bx:bx-moon' data-inline='false'></span>
      </span>
      <span tabindex="0" id='${CHANGE_TO_LIGHT_THEME_ICON_ID}' class='pointer change-theme-icon'>
        <span class='iconify' data-icon='heroicons-solid:sun' data-inline='false'></span>
      </span>
    `;
  }

  postInsertHtml() {
    this.changeToDarkThemeButtonDomElement = document.getElementById(CHANGE_TO_DARK_THEME_ICON_ID);
    this.changeToLightThemeButtonDomElement = document.getElementById(CHANGE_TO_LIGHT_THEME_ICON_ID);
    this.updateInnerHTML();
    this.changeToDarkThemeButtonDomElement.addEventListener('click', this.handleToggleThemeClickEvent.bind(this));
    this.changeToLightThemeButtonDomElement.addEventListener('click', this.handleToggleThemeClickEvent.bind(this));
  }

  private updateInnerHTML() {
    this.changeToDarkThemeButtonDomElement.style.display = 'none';
    this.changeToLightThemeButtonDomElement.style.display = 'none';
    if (this.appStateClient.getAppState().currentTheme === LIGHT_THEME_VALUE) {
      this.changeToDarkThemeButtonDomElement.style.display = 'flex';
    } else {
      this.changeToLightThemeButtonDomElement.style.display = 'flex';
    }
  }

  private handleToggleThemeClickEvent(event: any) {
    event.stopPropagation();
    const appStorage = this.appStateClient.getAppState();
    if (appStorage.currentTheme === LIGHT_THEME_VALUE) {
      document.body.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);
      document.body.classList.add(DARK_THEME_VALUE);
      appStorage.currentTheme = DARK_THEME_VALUE;
      this.appStateClient.saveAppState(appStorage);
      this.dispatchChangeThemeEvent(DARK_THEME_VALUE);
    } else {
      document.body.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);
      document.body.classList.add(LIGHT_THEME_VALUE);
      appStorage.currentTheme = LIGHT_THEME_VALUE;
      this.appStateClient.saveAppState(appStorage);
      this.dispatchChangeThemeEvent(LIGHT_THEME_VALUE);
    }
    this.updateInnerHTML();
  }

  private dispatchChangeThemeEvent(newTheme: string) {
    this.dispatchCustomEvent(CHANGE_THEME_EVENT, {
      newTheme,
    });
  }
}
