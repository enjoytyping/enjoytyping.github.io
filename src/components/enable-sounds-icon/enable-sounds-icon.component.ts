import { BaseHtmlComponent } from '../_core/base-component';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { ToastClient } from '../../services/toast/toast.service';

const ENABLE_SOUNDS_ICON_ID = 'ENABLE_SOUND_ICON_ID';
const DISABLE_SOUNDS_ICON_ID = 'DISABLE_SOUND_ICON_ID';

export class EnableSoundsIconHtmlComponent extends BaseHtmlComponent {
  private enableSoundButtonDomElement: HTMLElement;
  private disableSoundButtonDomElement: HTMLElement;
  private containerId: string;

  constructor(private appStateClient: IAppStateClient, private toastClient: ToastClient = ToastClient.getInstance()) {
    super();
  }

  preInsertHtml(): void {
    this.containerId = this.generateId();
    const appState = this.appStateClient.getAppState();
    appState.enableSounds = appState.enableSounds || false;
    this.appStateClient.saveAppState(appState);
  }

  toHtml() {
    return /* html */ `
      <span id="${this.containerId}" class="enable-sound-icon-container">
      <span id="${ENABLE_SOUNDS_ICON_ID}" title="Enable Sound"><span class="iconify" data-icon="akar-icons:sound-off"></span></span>
      <span id="${DISABLE_SOUNDS_ICON_ID}" title="Disable Sound"><span class="iconify" data-icon="akar-icons:sound-on"></span></span>
      </span>
    `;
  }

  postInsertHtml() {
    this.enableSoundButtonDomElement = document.getElementById(ENABLE_SOUNDS_ICON_ID);
    this.disableSoundButtonDomElement = document.getElementById(DISABLE_SOUNDS_ICON_ID);
    this.updateInnerHTML();
    this.enableSoundButtonDomElement.addEventListener('click', this.handleToggleSoundsClickEvent.bind(this));
    this.disableSoundButtonDomElement.addEventListener('click', this.handleToggleSoundsClickEvent.bind(this));
  }

  private updateInnerHTML() {
    this.enableSoundButtonDomElement.style.display = 'none';
    this.disableSoundButtonDomElement.style.display = 'none';
    if (this.appStateClient.getAppState().enableSounds) {
      this.disableSoundButtonDomElement.style.display = 'flex';
    } else {
      this.enableSoundButtonDomElement.style.display = 'flex';
    }
  }

  private handleToggleSoundsClickEvent(event: any) {
    event.stopPropagation();
    const isChrome = /chrome/.test(navigator.userAgent.toLowerCase());
    const isEdge = /edge/.test(navigator.userAgent.toLowerCase());
    const appState = this.appStateClient.getAppState();
    if (!appState.enableSounds && !isChrome && !isEdge) {
      this.toastClient.warn('Sorry, the sound works properly only on Chrome or Edge browsers :(');
      return;
    }
    appState.enableSounds = !appState.enableSounds;
    this.appStateClient.saveAppState(appState);
    this.updateInnerHTML();
  }
}
