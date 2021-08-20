import './navbar.scss';
import { AppSettingsDialogHtmlComponent } from '../app-settings-dialog/app-settings-dialog.component';
import { ChangeThemeIconHtmlComponent } from '../change-theme-icon/change-theme-icon.component';
import { BaseHtmlComponent } from '../_core/base-component';
import { AppStateClient } from '../../state/app-state.client';
import { AddCustomTextToTypeDialogHtmlComponent } from '../add-custom-text-to-type-dialog/add-custom-text-to-type-dialog';
import { SelectHtmlComponent } from '../_core/select/select.component';
import { TextToTypeCategory, TEXT_TO_TYPE_CATEGORIES } from '../../state/text-to-type-category.enum';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { getTextToTypeLanguage, TextToTypeLanguage } from '../../state/text-to-type-language.enum';
import { APP_SETTINGS_CHANGE_EVENT } from '../../constants/constant';
import { EnableSoundsIconHtmlComponent } from '../enable-sounds-icon/enable-sounds-icon.component';

const APP_SETTINGS_ICON_ID = 'APP_SETTINGS_ICON_ID';
const ADD_CUSTOM_TEXT_TO_TYPE_ICON_ID = 'ADD_CUSTOM_TEXT_TO_TYPE_ICON_ID';

export class NavbarHtmlComponent extends BaseHtmlComponent {
  private navbar: HTMLElement;
  private appSettingsIcon: HTMLElement;
  private appSettingsDialog: AppSettingsDialogHtmlComponent;
  private enableSoundsIcon: EnableSoundsIconHtmlComponent;
  private addCustomTextToTypeIcon: HTMLElement;
  private addCustomTextToTypeDialog: AddCustomTextToTypeDialogHtmlComponent;
  private changeThemeIcon: ChangeThemeIconHtmlComponent;
  private textToTypeCategoriesSelect: SelectHtmlComponent<TextToTypeCategory>;
  private textToTypeLanguagesSelect: SelectHtmlComponent<TextToTypeLanguage>;
  private textToTypeLanguagesContainerId: string;
  private textToTypeLanguagesContainer: HTMLElement;

  constructor(private appStateClient: IAppStateClient) {
    super();
    const appState = this.appStateClient.getAppState();
    this.appSettingsDialog = new AppSettingsDialogHtmlComponent(AppStateClient.getInstance());
    this.addCustomTextToTypeDialog = new AddCustomTextToTypeDialogHtmlComponent(AppStateClient.getInstance());
    this.changeThemeIcon = new ChangeThemeIconHtmlComponent(AppStateClient.getInstance());
    this.textToTypeCategoriesSelect = new SelectHtmlComponent<TextToTypeCategory>({
      options: TEXT_TO_TYPE_CATEGORIES,
      selectedOptionValue: appState.textToTypeCategory,
    });
    this.textToTypeLanguagesSelect = new SelectHtmlComponent<TextToTypeLanguage>({
      options: getTextToTypeLanguage(appState.textToTypeCategory),
      selectedOptionValue: appState.textToTypeLanguage,
    });
    this.enableSoundsIcon = new EnableSoundsIconHtmlComponent(AppStateClient.getInstance());
  }

  preInsertHtml() {
    this.textToTypeLanguagesContainerId = this.generateId();
    this.appSettingsDialog.preInsertHtml();
    this.addCustomTextToTypeDialog.preInsertHtml();
    this.changeThemeIcon.preInsertHtml();
    this.textToTypeCategoriesSelect.preInsertHtml();
    this.textToTypeLanguagesSelect.preInsertHtml();
    this.enableSoundsIcon.preInsertHtml();
  }

  toHtml() {
    return /* html */ `
      <nav>
        <div class='left'>
          <a href='/'>
            <img src='/logo.png' alt='logo' />
            <span>Enjoy Typing</span>
          </a>
        </div>
        <div class='right'>
          <span class="select">${this.textToTypeCategoriesSelect.toHtml()}</span>
          <span class="select" id="${this.textToTypeLanguagesContainerId}">${this.textToTypeLanguagesSelect.toHtml()}</span>
          <span>${this.enableSoundsIcon.toHtml()}</span>
          <span id="${ADD_CUSTOM_TEXT_TO_TYPE_ICON_ID}" title="Add custom text to type"><span class="iconify" data-icon="grommet-icons:add" data-inline="false"></span></span>
          <span id="${APP_SETTINGS_ICON_ID}" title="App Settings"><span class="iconify" data-icon="jam:settings-alt" data-inline="false" data-rotate="270deg"></span></span>
          <div class="app-settings-drop-down">${this.appSettingsDialog.toHtml()}<div>
          <div class="app-custom-text-to-type-dialog-container">${this.addCustomTextToTypeDialog.toHtml()}<div>
          <span title="Change App Theme">${this.changeThemeIcon.toHtml()}</span>
        </div>
      </nav>
    `;
  }

  postInsertHtml() {
    this.textToTypeLanguagesContainer = document.getElementById(this.textToTypeLanguagesContainerId);
    this.appSettingsDialog.postInsertHtml();
    this.addCustomTextToTypeDialog.postInsertHtml();
    this.textToTypeCategoriesSelect.postInsertHtml();
    this.textToTypeLanguagesSelect.postInsertHtml();
    this.navbar = document.querySelector('nav');
    this.appSettingsIcon = document.getElementById(APP_SETTINGS_ICON_ID);
    this.appSettingsIcon.addEventListener('click', this.handleAppSettingsIconClickEvent.bind(this));
    this.addCustomTextToTypeIcon = document.getElementById(ADD_CUSTOM_TEXT_TO_TYPE_ICON_ID);
    this.addCustomTextToTypeIcon.addEventListener('click', this.handleAAddCustomTextToTypeIconClickEvent.bind(this));
    window.addEventListener('scroll', this.onWindowScrollEvent.bind(this));
    this.changeThemeIcon.postInsertHtml();
    this.textToTypeCategoriesSelect.onUpdate(this.handleTextToTypeCategoryChangeEvent.bind(this));
    this.textToTypeLanguagesSelect.onUpdate(this.handleTextToTypeLanguageChangeEvent.bind(this));
    this.enableSoundsIcon.postInsertHtml();
    this.addCustomEventListener(APP_SETTINGS_CHANGE_EVENT, this.update.bind(this));
    this.update();
  }

  private handleAppSettingsIconClickEvent(event) {
    event.stopPropagation();
    this.appSettingsDialog.show();
  }

  private handleAAddCustomTextToTypeIconClickEvent(event) {
    event.stopPropagation();
    this.addCustomTextToTypeDialog.show();
  }

  private onWindowScrollEvent() {
    if (window.scrollY === 0) {
      this.navbar.classList.remove('shadow');
    } else {
      this.navbar.classList.add('shadow');
    }
  }

  private handleTextToTypeCategoryChangeEvent(value: TextToTypeCategory) {
    const appState = this.appStateClient.getAppState();
    if (value !== appState.textToTypeCategory) {
      appState.textToTypeIndex = 0;
    }
    appState.textToTypeCategory = value;
    this.textToTypeCategoriesSelect.reset({
      options: TEXT_TO_TYPE_CATEGORIES,
      selectedOptionValue: appState.textToTypeCategory,
    });
    const options = getTextToTypeLanguage(appState.textToTypeCategory);
    this.textToTypeLanguagesContainer.classList.add('hide');
    if (options.length > 0) {
      const selectedLanguage = options[0].value;
      appState.textToTypeLanguage = selectedLanguage;
      this.textToTypeLanguagesSelect.reset({
        options,
        selectedOptionValue: selectedLanguage,
      });
      this.textToTypeLanguagesContainer.classList.remove('hide');
    }
    this.saveAppState(appState);
  }

  private handleTextToTypeLanguageChangeEvent(value: TextToTypeLanguage) {
    const appState = this.appStateClient.getAppState();
    if (value !== appState.textToTypeLanguage) {
      appState.textToTypeIndex = 0;
    }
    appState.textToTypeLanguage = value;
    this.saveAppState(appState);
  }

  private saveAppState(appState) {
    this.appStateClient.saveAppState(appState);
    this.dispatchCustomEvent(APP_SETTINGS_CHANGE_EVENT);
  }

  private update() {
    const appState = this.appStateClient.getAppState();
    this.textToTypeCategoriesSelect.reset({
      options: TEXT_TO_TYPE_CATEGORIES,
      selectedOptionValue: appState.textToTypeCategory,
    });
    const options = getTextToTypeLanguage(appState.textToTypeCategory);
    this.textToTypeLanguagesSelect.reset({
      options,
      selectedOptionValue: appState.textToTypeLanguage,
    });
    this.textToTypeLanguagesContainer.classList.add('hide');
    if (options.length > 0) {
      this.textToTypeLanguagesContainer.classList.remove('hide');
    }
  }
}
