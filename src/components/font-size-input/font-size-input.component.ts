import './font-size-input.scss';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { AppStateClient } from '../../state/app-state.client';
import { CHANGE_FONT_SIZE_EVENT } from '../../constants/constant';
import { BaseNumericInputHtmlComponent } from '../_core/numeric-input/numeric-input.component';

export class FontSizeInputHtmlComponent extends BaseNumericInputHtmlComponent {
  constructor(private appStateClient: IAppStateClient = AppStateClient.getInstance()) {
    super();
  }

  onUpdate(newValue: number) {
    const appState = this.appStateClient.getAppState();
    appState.fontSize = newValue;
    console.log(newValue);
    this.appStateClient.saveAppState(appState);
    this.dispatchCustomEvent(CHANGE_FONT_SIZE_EVENT);
  }

  getInitialValue() {
    return this.appStateClient.getAppState().fontSize;
  }
}
