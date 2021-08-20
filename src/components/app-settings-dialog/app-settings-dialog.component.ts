import './app-settings-dialog.scss';
import { APP_SETTINGS_CHANGE_EVENT, END_UPDATING_APP_SETTINGS_EVENT, START_UPDATING_APP_SETTINGS_EVENT } from '../../constants/constant';
import { BaseDialogHtmlComponent, DialogPhase } from '../_core/dialog/base-dialog-component';
import { InputHtmlComponent } from '../_core/input/input.component';
import { SelectHtmlComponent } from '../_core/select/select.component';
import { TextToTypeCategory, TEXT_TO_TYPE_CATEGORIES } from '../../state/text-to-type-category.enum';
import { ButtonHtmlComponent, ButtonStyle } from '../_core/button/button.component';
import { AppState } from '../../state/app-state.model';
import { SwitchHtmlComponent } from '../_core/switch/switch.component';
import { TextToTypeSubCategory, getTextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { IAppStateClient } from '../../state/app-state.client.interface';

export class AppSettingsDialogHtmlComponent extends BaseDialogHtmlComponent {
  private stopOnErrorSwitch: SwitchHtmlComponent;
  private enableCapitalLettersSwitch: SwitchHtmlComponent;
  private enablePunctuationCharactersSwitch: SwitchHtmlComponent;
  private enableSoundsSwitch: SwitchHtmlComponent;
  private maxCharactersToType: InputHtmlComponent;
  private textToTypeCategoriesSelect: SelectHtmlComponent<TextToTypeCategory>;
  private textToTypeSubCategoriesSelect: SelectHtmlComponent<TextToTypeSubCategory>;
  private enableCapitalLettersContainer: HTMLElement;
  private enablePunctuationCharactersContainer: HTMLElement;
  private textToTypeSubCategoriesContainerId: string;
  private enableCapitalLettersContainerId: string;
  private enablePunctuationCharactersContainerId: string;
  private textToTypeSubCategoryContainerId: string;
  private textToTypeSubCategoryContainer: HTMLElement;
  private saveButton: ButtonHtmlComponent;
  private cancelButton: ButtonHtmlComponent;
  private appState: AppState;

  constructor(private appStateClient: IAppStateClient) {
    super();
    this.addPhaseListener(DialogPhase.POST_DIALOG_SHOW, this.postShow.bind(this));
    this.addPhaseListener(DialogPhase.POST_DIALOG_HIDE, this.postHide.bind(this));
  }

  preInsertHtml(): void {
    super.preInsertHtml();
    this.textToTypeSubCategoryContainerId = this.generateId();
    this.enableCapitalLettersContainerId = this.generateId();
    this.enablePunctuationCharactersContainerId = this.generateId();
    this.textToTypeSubCategoriesContainerId = this.generateId();
    this.appState = this.appStateClient.getAppState();
    this.appState.textToTypeCategory = this.appState.textToTypeCategory || TextToTypeCategory.QUOTES;
    this.appState.textToTypeSubCategory = this.appState.textToTypeSubCategory || TextToTypeSubCategory.ENGLISH;
    this.appState.stopOnError = this.appState.stopOnError || false;
    this.appState.enableCapitalLetters = this.appState.enableCapitalLetters || true;
    this.appState.enablePunctuationCharacters = this.appState.enablePunctuationCharacters || true;
    this.appState.enableSounds = this.appState.enableSounds || false;
    this.appState.maxCharactersToType = this.appState.maxCharactersToType || 2000;
    this.appStateClient.saveAppState(this.appState);
    this.stopOnErrorSwitch = new SwitchHtmlComponent(this.appState.stopOnError);
    this.enableCapitalLettersSwitch = new SwitchHtmlComponent(this.appState.enableCapitalLetters);
    this.enableSoundsSwitch = new SwitchHtmlComponent(this.appState.enableSounds);
    this.enablePunctuationCharactersSwitch = new SwitchHtmlComponent(this.appState.enablePunctuationCharacters);
    this.maxCharactersToType = new InputHtmlComponent(this.appState.maxCharactersToType.toString());
    this.textToTypeCategoriesSelect = new SelectHtmlComponent<TextToTypeCategory>({
      options: TEXT_TO_TYPE_CATEGORIES,
      selectedOptionValue: this.appState.textToTypeCategory,
    });
    this.textToTypeSubCategoriesSelect = new SelectHtmlComponent<TextToTypeSubCategory>({
      options: getTextToTypeSubCategory(this.appState.textToTypeCategory),
      selectedOptionValue: this.appState.textToTypeSubCategory,
    });
    this.saveButton = new ButtonHtmlComponent('Save');
    this.cancelButton = new ButtonHtmlComponent('Cancel', ButtonStyle.SECONDARY);
    this.stopOnErrorSwitch.preInsertHtml();
    this.enableCapitalLettersSwitch.preInsertHtml();
    this.enablePunctuationCharactersSwitch.preInsertHtml();
    this.enableSoundsSwitch.preInsertHtml();
    this.maxCharactersToType.preInsertHtml();
    this.textToTypeCategoriesSelect.preInsertHtml();
    this.textToTypeSubCategoriesSelect.preInsertHtml();
    this.saveButton.preInsertHtml();
    this.cancelButton.preInsertHtml();
  }

  getDialogCssClass(): string {
    return 'app-settings-dialog';
  }

  getDialogTitle(): string {
    return 'Settings';
  }

  getDialogBody(): string {
    return /* html */ `
      <div class="app-setting">
        <span>Text to type category</span>
        <span>${this.textToTypeCategoriesSelect.toHtml()}</span>
      </div>
      <div id="${this.textToTypeSubCategoryContainerId}" class="app-setting">
        <span>Text to type sub-category</span>
        <span id="${this.textToTypeSubCategoriesContainerId}">${this.textToTypeSubCategoriesSelect.toHtml()}</span>
      </div>
      <div class="app-setting">
        <span>Max characters to type</span>
        <span>${this.maxCharactersToType.toHtml()}</span>
      </div>
      <div class="app-setting">
        <span>Stop on error</span>
        <span>${this.stopOnErrorSwitch.toHtml()}</span>
      </div>
      <div id="${this.enableCapitalLettersContainerId}" class="app-setting">
        <span>Enable capital letters</span>
        <span>${this.enableCapitalLettersSwitch.toHtml()}</span>
      </div>
      <div id="${this.enablePunctuationCharactersContainerId}" class="app-setting">
        <span>Enable punctuation characters</span>
        <span>${this.enablePunctuationCharactersSwitch.toHtml()}</span>
      </div>
      <div class="app-setting">
        <span>Enable sounds</span>
        <span>${this.enableSoundsSwitch.toHtml()}</span>
      </div>
    `;
  }

  getDialogFooter(): string {
    return /* html */ `
      <div class="app-settings-dialog-footer">
        ${this.cancelButton.toHtml()}
        ${this.saveButton.toHtml()}
      </div>
    `;
  }

  postInsertHtml(): void {
    super.postInsertHtml();
    this.textToTypeSubCategoryContainer = document.getElementById(this.textToTypeSubCategoryContainerId);
    this.enableCapitalLettersContainer = document.getElementById(this.enableCapitalLettersContainerId);
    this.enablePunctuationCharactersContainer = document.getElementById(this.enablePunctuationCharactersContainerId);
    this.stopOnErrorSwitch.postInsertHtml();
    this.enableCapitalLettersSwitch.postInsertHtml();
    this.enablePunctuationCharactersSwitch.postInsertHtml();
    this.enableSoundsSwitch.postInsertHtml();
    this.textToTypeCategoriesSelect.postInsertHtml();
    this.textToTypeSubCategoriesSelect.postInsertHtml();
    this.maxCharactersToType.postInsertHtml();
    this.saveButton.postInsertHtml();
    this.cancelButton.postInsertHtml();
    this.appState = this.appStateClient.getAppState();
    this.updateInnerHTML();
    this.maxCharactersToType.onValidate(this.validateMaxCharactersToType);
    this.stopOnErrorSwitch.onUpdate(this.handleStopOnErrorChangeEvent.bind(this));
    this.enableCapitalLettersSwitch.onUpdate(this.handleEnableCapitalLettersChangeEvent.bind(this));
    this.enablePunctuationCharactersSwitch.onUpdate(this.handleEnablePunctuationCharactersChangeEvent.bind(this));
    this.enableSoundsSwitch.onUpdate(this.handleEnableSoundsChangeEvent.bind(this));
    this.maxCharactersToType.onUpdate(this.handleMaxCharactersToTypeChangeEvent.bind(this));
    this.textToTypeCategoriesSelect.onUpdate(this.handleTextToTypeCategoryChangeEvent.bind(this));
    this.textToTypeSubCategoriesSelect.onUpdate(this.handleTextToTypeSubCategoryChangeEvent.bind(this));
    this.saveButton.onClick(this.handleSaveButtonClickEvent.bind(this));
    this.cancelButton.onClick(this.handleCancelButtonClickEvent.bind(this));
  }

  private postShow(): void {
    this.maxCharactersToType.blur();
    this.appState = this.appStateClient.getAppState();
    this.updateInnerHTML();
    this.dispatchCustomEvent(START_UPDATING_APP_SETTINGS_EVENT);
  }

  private postHide(): void {
    this.dispatchCustomEvent(END_UPDATING_APP_SETTINGS_EVENT);
  }

  private updateInnerHTML() {
    this.textToTypeCategoriesSelect.reset({
      options: TEXT_TO_TYPE_CATEGORIES,
      selectedOptionValue: this.appState.textToTypeCategory,
    });
    const langages = getTextToTypeSubCategory(this.appState.textToTypeCategory);
    this.textToTypeSubCategoriesSelect.reset({
      options: langages,
      selectedOptionValue: this.appState.textToTypeSubCategory,
    });
    this.textToTypeSubCategoryContainer.classList.add('hide');
    if (langages.length > 0) {
      this.textToTypeSubCategoryContainer.classList.remove('hide');
    }
    this.maxCharactersToType.reset('' + this.appState.maxCharactersToType);
    this.stopOnErrorSwitch.reset(this.appState.stopOnError);
    this.enableCapitalLettersSwitch.reset(this.appState.enableCapitalLetters);
    this.enablePunctuationCharactersSwitch.reset(this.appState.enablePunctuationCharacters);
    this.enableSoundsSwitch.reset(this.appState.enableSounds);

    this.enableCapitalLettersContainer.classList.remove('hide');
    this.enablePunctuationCharactersContainer.classList.remove('hide');
    if (this.appState.textToTypeCategory == TextToTypeCategory.CODE) {
      this.enableCapitalLettersContainer.classList.add('hide');
      this.enablePunctuationCharactersContainer.classList.add('hide');
    }
  }

  private validateMaxCharactersToType(value: string) {
    const number = Number.parseInt(value);
    if (Number.isNaN(number)) {
      throw new Error('max characters to type must be a number');
    }
  }

  private handleStopOnErrorChangeEvent(value: boolean) {
    this.appState.stopOnError = value;
  }

  private handleEnableCapitalLettersChangeEvent(value: boolean) {
    this.appState.enableCapitalLetters = value;
  }

  private handleEnablePunctuationCharactersChangeEvent(value: boolean) {
    this.appState.enablePunctuationCharacters = value;
  }

  private handleEnableSoundsChangeEvent(value: boolean) {
    this.appState.enableSounds = value;
  }

  private handleMaxCharactersToTypeChangeEvent(value: string) {
    this.appState.maxCharactersToType = +value;
  }

  private handleTextToTypeCategoryChangeEvent(value: TextToTypeCategory) {
    if (value !== this.appState.textToTypeCategory) {
      this.appState.textToTypeIndex = 0;
    }
    this.appState.textToTypeCategory = value;
    if (value == TextToTypeCategory.CODE) {
      this.appState.textToTypeSubCategory = TextToTypeSubCategory.JAVA;
    } else if (value == TextToTypeCategory.TRAINING_AZERTY || value == TextToTypeCategory.TRAINING_QWERTY) {
      this.appState.textToTypeSubCategory = TextToTypeSubCategory.KEYS_F_AND_J;
    } else {
      this.appState.textToTypeSubCategory = TextToTypeSubCategory.ENGLISH;
    }
    this.updateInnerHTML();
  }

  private handleTextToTypeSubCategoryChangeEvent(value: TextToTypeSubCategory) {
    if (value !== this.appState.textToTypeSubCategory) {
      this.appState.textToTypeIndex = 0;
    }
    this.appState.textToTypeSubCategory = value;
  }

  private handleSaveButtonClickEvent() {
    this.appStateClient.saveAppState(this.appState);
    this.dispatchCustomEvent(APP_SETTINGS_CHANGE_EVENT);
    this.hide();
  }

  private handleCancelButtonClickEvent() {
    this.hide();
  }
}
