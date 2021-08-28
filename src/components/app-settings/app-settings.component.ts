import './app-settings.scss';
import { APP_SETTINGS_CHANGE_EVENT, END_UPDATING_APP_SETTINGS_EVENT, START_UPDATING_APP_SETTINGS_EVENT } from '../../constants/constant';
import { InputHtmlComponent } from '../_core/input/input.component';
import { SelectHtmlComponent } from '../_core/select/select.component';
import { TextToTypeCategory, TEXT_TO_TYPE_CATEGORIES } from '../../state/text-to-type-category.enum';
import { ButtonHtmlComponent, ButtonStyle } from '../_core/button/button.component';
import { AppState } from '../../state/app-state.model';
import { SwitchHtmlComponent } from '../_core/switch/switch.component';
import { TextToTypeSubCategory, getTextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { TrainingLesson } from '../training/training-lesson.enum';
import { BaseSidePanelHtmlComponent } from '../_core/side-panel/side-panel.component';
import { LabeledSelectHtmlComponent } from '../_core/select/labeled-select.component ';
import { LabeledInputHtmlComponent } from '../_core/input/labeled-input.component';

export class AppSettingsHtmlComponent extends BaseSidePanelHtmlComponent {
  private stopOnErrorSwitch: SwitchHtmlComponent;
  private enableCapitalLettersSwitch: SwitchHtmlComponent;
  private enablePunctuationCharactersSwitch: SwitchHtmlComponent;
  private enableSoundsSwitch: SwitchHtmlComponent;
  private maxCharactersToType: LabeledInputHtmlComponent;
  private textToTypeCategoriesSelect: LabeledSelectHtmlComponent<TextToTypeCategory>;
  private textToTypeSubCategoriesSelect: LabeledSelectHtmlComponent<TextToTypeSubCategory>;
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
    this.maxCharactersToType = new LabeledInputHtmlComponent('Max characters to type', this.appState.maxCharactersToType.toString(), false);
    this.textToTypeCategoriesSelect = new LabeledSelectHtmlComponent<TextToTypeCategory>(
      {
        options: TEXT_TO_TYPE_CATEGORIES,
        selectedOptionValue: this.appState.textToTypeCategory,
      },
      'Text to type category'
    );
    this.textToTypeSubCategoriesSelect = new LabeledSelectHtmlComponent<TextToTypeSubCategory>(
      {
        options: getTextToTypeSubCategory(this.appState.textToTypeCategory),
        selectedOptionValue: this.appState.textToTypeSubCategory,
      },
      'Text to type subcategory'
    );
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

  getTitle(): string {
    return 'Settings';
  }

  getBody(): string {
    return /* html */ `
      <div class="app-settings">
        <div class="app-settings-inputs">
          <div class="app-setting">
            <span class="app-setting-select">${this.textToTypeCategoriesSelect.toHtml()}</span>
          </div>
          <div id="${this.textToTypeSubCategoryContainerId}" class="app-setting">
            <span id="${this.textToTypeSubCategoriesContainerId}" class="app-setting-select">${this.textToTypeSubCategoriesSelect.toHtml()}</span>
          </div>
          <div class="app-setting">
            <span class="app-setting-input">${this.maxCharactersToType.toHtml()}</span>
          </div>
          <div class="app-setting">
            <span class="app-setting-label">Stop on error</span>
            <span>${this.stopOnErrorSwitch.toHtml()}</span>
          </div>
          <div id="${this.enableCapitalLettersContainerId}" class="app-setting">
            <span class="app-setting-label">Enable capital letters</span>
            <span>${this.enableCapitalLettersSwitch.toHtml()}</span>
          </div>
          <div id="${this.enablePunctuationCharactersContainerId}" class="app-setting">
            <span class="app-setting-label">Enable punctuation characters</span>
            <span>${this.enablePunctuationCharactersSwitch.toHtml()}</span>
          </div>
          <div class="app-setting">
            <span class="app-setting-label">Enable sounds</span>
            <span>${this.enableSoundsSwitch.toHtml()}</span>
          </div>
        </div>
        <div class="app-settings-buttons">
          ${this.cancelButton.toHtml()}
          ${this.saveButton.toHtml()}
        </div>
      </div>
    `;
  }

  getSidePanelCssClass(): string {
    return 'app-settings-side-panel';
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

  open(): void {
    super.open();
    this.maxCharactersToType.blur();
    this.appState = this.appStateClient.getAppState();
    this.updateInnerHTML();
    this.dispatchCustomEvent(START_UPDATING_APP_SETTINGS_EVENT);
  }

  close(): void {
    super.close();
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
    } else if (value == TextToTypeCategory.TRAINING) {
      this.appState.textToTypeSubCategory = TextToTypeSubCategory.AZERTY_KEYBOARD;
      this.appState.trainingLesson = TrainingLesson.KEYS_F_AND_J;
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
    this.close();
  }

  private handleCancelButtonClickEvent() {
    this.close();
  }
}
