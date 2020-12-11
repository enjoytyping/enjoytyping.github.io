import { PROGRESS_DIV_ID } from '../constants/constant';
import { DELETE_PROGRESS_DATA_EVENT } from '../constants/event.constant';
import { BaseBlockHtmlComponent } from './base/base-block-component';
import { ProgressHtmlComponent } from './progress.component';

export class ProgressPageHtmlComponent extends BaseBlockHtmlComponent {
  private speedProgress: ProgressHtmlComponent;
  private errorProgress: ProgressHtmlComponent;
  private deleteProgressDataButton: HTMLElement;
  private deleteProgressDataButtonId: string;

  __preInsertHtml(): void {
    this.deleteProgressDataButtonId = this.getRandomId();
    const appStorage = this.getAppStorage();
    this.speedProgress = new ProgressHtmlComponent(
      'Global Speed progress',
      appStorage.typedTextStats.map((s) => s.wpm)
    );
    this.errorProgress = new ProgressHtmlComponent(
      'Global Error progress',
      appStorage.typedTextStats.map((s) => s.errors)
    );
    this.speedProgress.preInsertHtml();
    this.errorProgress.preInsertHtml();
  }

  __toHtml(): string {
    return /* html */ `
      <div id="${PROGRESS_DIV_ID}" class="progress-container">
        <div class="progress-graph">${this.speedProgress.toHtml()}</div>
        <div class="progress-graph">${this.errorProgress.toHtml()}</div>
        
        <div class="delete-progress-data-button-container">
          <button id="${this.deleteProgressDataButtonId}">Delete Progress Data</button>
        <div>
      </div>
    `;
  }
  __postInsertHtml(): void {
    this.speedProgress.postInsertHtml();
    this.errorProgress.postInsertHtml();
    this.deleteProgressDataButton = document.getElementById(this.deleteProgressDataButtonId);
    this.deleteProgressDataButton.addEventListener('click', this.handleDeleteProgressDataButtonClickEvent.bind(this));
  }

  private handleDeleteProgressDataButtonClickEvent() {
    const appStorage = this.getAppStorage();
    appStorage.typedTextStats = [];
    appStorage.typedKeysStatsJson = '[]';
    this.saveAppStorage(appStorage);
    this.dispatchCustomEvent(DELETE_PROGRESS_DATA_EVENT);
  }
}
