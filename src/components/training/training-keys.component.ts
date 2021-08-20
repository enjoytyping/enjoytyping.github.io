import './training.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { TextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { AppStateClient } from '../../state/app-state.client';
import { APP_SETTINGS_CHANGE_EVENT, TRAINING_LESSON_CHANGE_EVENT } from '../../constants/constant';

export class TrainingKeysHtmlComponent extends BaseHtmlComponent {
  private containerId: string;
  private container: HTMLElement;

  constructor(private label: string, private keys: TextToTypeSubCategory, private appSettingsClient: IAppStateClient = AppStateClient.getInstance()) {
    super();
    this.containerId = this.generateId();
  }

  preInsertHtml(): void {}

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="training-keys-container">
        <span class="keys">${this.label}</span>
        <span>Keys</span>
      </div>
    `;
  }

  postInsertHtml(): void {
    this.container = document.getElementById(this.containerId);
    this.update();
    this.addCustomEventListener(TRAINING_LESSON_CHANGE_EVENT, this.update.bind(this));
    this.container.addEventListener('click', this.handleContainerClickEvent.bind(this));
  }

  private update() {
    const appSettings = this.appSettingsClient.getAppState();
    if (appSettings.textToTypeSubCategory === this.keys) {
      this.container.classList.add('selected');
    } else {
      this.container.classList.remove('selected');
    }
  }

  private handleContainerClickEvent() {
    const appSettings = this.appSettingsClient.getAppState();
    appSettings.textToTypeSubCategory = this.keys;
    this.appSettingsClient.saveAppState(appSettings);
    this.dispatchCustomEvent(TRAINING_LESSON_CHANGE_EVENT);
  }
}
