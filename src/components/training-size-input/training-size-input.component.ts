import './training-size-input.scss';
import { IAppStateClient } from '../../state/app-state.client.interface';
import { AppStateClient } from '../../state/app-state.client';
import { CHANGE_TRAINING_SIZE_EVENT, TRAINING_SIZE_DEFAULT_VALUE } from '../../constants/constant';
import { BaseNumericInputHtmlComponent } from '../_core/numeric-input/numeric-input.component';

export class TrainingSizeInputHtmlComponent extends BaseNumericInputHtmlComponent {
  constructor(private appStateClient: IAppStateClient = AppStateClient.getInstance()) {
    super();
  }

  onUpdate(newValue: number) {
    const appState = this.appStateClient.getAppState();
    appState.trainingSize = newValue;
    this.appStateClient.saveAppState(appState);
    this.dispatchCustomEvent(CHANGE_TRAINING_SIZE_EVENT);
  }

  getInitialValue() {
    return this.appStateClient.getAppState().trainingSize || TRAINING_SIZE_DEFAULT_VALUE;
  }
}
