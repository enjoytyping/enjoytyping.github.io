import './training.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { TrainingKeysHtmlComponent } from './training-keys.component';

export class AzertyTrainingHtmlComponent extends BaseHtmlComponent {
  private trainingArray: BaseHtmlComponent[] = [];

  preInsertHtml(): void {
    this.trainingArray.push(new TrainingKeysHtmlComponent('FJ'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('DK'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('DFJK'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('SL'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('QM'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('QSLM'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('GH'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('FGHJ'));

    this.trainingArray.push(new TrainingKeysHtmlComponent('RU'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('EI'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('ERUI'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('ZO'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('AP'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('AZOP'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('TY'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('RTYU'));

    this.trainingArray.push(new TrainingKeysHtmlComponent('V,'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('C;'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('CV,;'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('X:'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('W!'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('WX:!'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('BN'));
    this.trainingArray.push(new TrainingKeysHtmlComponent('VBN,'));
  }

  toHtml() {
    return /* html */ `
      <div class="training-container">
        ${this.trainingArray.map((k) => k.toHtml()).join('')}
      </div>
    `;
  }

  postInsertHtml(): void {
    // nothing to do
  }
}
