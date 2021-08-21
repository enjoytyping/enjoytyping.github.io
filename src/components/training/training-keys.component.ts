import './training.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { TextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { AppStateClient } from '../../state/app-state.client';
import { END_TYPING_EVENT, MIN_STATS_TO_DISPLAY_PROGRESS_GRAPH, TRAINING_LESSON_CHANGE_EVENT } from '../../constants/constant';

export class TrainingKeysHtmlComponent extends BaseHtmlComponent {
  private containerId: string;
  private container: HTMLElement;

  constructor(
    private keysAyString: string,
    private keys: TextToTypeSubCategory,
    private appSettingsClient: IAppStateClient = AppStateClient.getInstance()
  ) {
    super();
    this.containerId = this.generateId();
  }

  preInsertHtml(): void {}

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="training-keys-container">
        <span class="keys">${this.keysAyString}</span>
        <span>Keys</span>
      </div>
    `;
  }

  postInsertHtml(): void {
    this.container = document.getElementById(this.containerId);
    this.update();
    this.addCustomEventListener(TRAINING_LESSON_CHANGE_EVENT, this.update.bind(this));
    this.addCustomEventListener(END_TYPING_EVENT, this.update.bind(this));
    this.container.addEventListener('click', this.handleContainerClickEvent.bind(this));
  }

  private update() {
    const appSettings = this.appSettingsClient.getAppState();
    if (appSettings.textToTypeSubCategory === this.keys) {
      this.container.classList.add('selected');
    } else {
      this.container.classList.remove('selected');
    }
    const keyStats = this.appSettingsClient.getTypedKeysStatsMap();
    if (keyStats) {
      const speeds = this.keysAyString
        .toLowerCase()
        .split('')
        .map((c) => {
          if (keyStats.get(c)) {
            let stats = keyStats.get(c);
            let statsWpm = stats.filter((s) => s.wpm > 0).map((s) => s.wpm);
            if (statsWpm.length >= MIN_STATS_TO_DISPLAY_PROGRESS_GRAPH) {
              return this.arrayAvg(statsWpm);
            }
          }
          return 0;
        });
      if (speeds.filter((s) => s == 0).length > 0) {
        this.container.classList.remove('avg-wpm-lt-10', 'avg-wpm-lt-20', 'avg-wpm-lt-30', 'avg-wpm-lt-40', 'avg-wpm-lt-50', 'avg-wpm-gte-50');
      } else if (speeds.filter((s) => s < 10).length > 0) {
        this.container.classList.add('avg-wpm-lt-10');
      } else if (speeds.filter((s) => s < 20).length > 0) {
        this.container.classList.add('avg-wpm-lt-20');
      } else if (speeds.filter((s) => s < 30).length > 0) {
        this.container.classList.add('avg-wpm-lt-30');
      } else if (speeds.filter((s) => s < 40).length > 0) {
        this.container.classList.add('avg-wpm-lt-40');
      } else if (speeds.filter((s) => s < 50).length > 0) {
        this.container.classList.add('avg-wpm-lt-50');
      } else {
        this.container.classList.add('avg-wpm-gte-50');
      }
      this.container.title = `Typing speed: ${this.arrayAvg(speeds)}`;
    }
  }

  private arrayAvg(array) {
    return Math.round(array.reduce((sum, current) => sum + current, 0) / array.length);
  }

  private handleContainerClickEvent() {
    const appSettings = this.appSettingsClient.getAppState();
    appSettings.textToTypeSubCategory = this.keys;
    this.appSettingsClient.saveAppState(appSettings);
    this.dispatchCustomEvent(TRAINING_LESSON_CHANGE_EVENT);
  }
}
