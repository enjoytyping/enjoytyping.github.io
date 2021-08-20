import './training.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { TrainingKeysHtmlComponent } from './training-keys.component';
import { TextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { IHtmlComponent } from '../_core/component.interface';

export class QwertyTrainingHtmlComponent extends BaseHtmlComponent {
  private array: IHtmlComponent[] = [];

  preInsertHtml(): void {
    this.array.push(new TrainingKeysHtmlComponent('FJ', TextToTypeSubCategory.KEYS_F_AND_J));
    this.array.push(new TrainingKeysHtmlComponent('DK', TextToTypeSubCategory.KEYS_D_AND_K));
    this.array.push(new TrainingKeysHtmlComponent('DFJK', TextToTypeSubCategory.KEYS_FJDK));
    this.array.push(new TrainingKeysHtmlComponent('SL', TextToTypeSubCategory.KEYS_S_AND_L));
    this.array.push(new TrainingKeysHtmlComponent('A;', TextToTypeSubCategory.KEYS_A_AND_SEMI_COLON));
    this.array.push(new TrainingKeysHtmlComponent('ASL;', TextToTypeSubCategory.KEYS_ASL_SEMI_COLON));
    this.array.push(new TrainingKeysHtmlComponent('GH', TextToTypeSubCategory.KEYS_G_AND_H));
    this.array.push(new TrainingKeysHtmlComponent('FGHJ', TextToTypeSubCategory.KEYS_FGHJ));

    this.array.push(new TrainingKeysHtmlComponent('RU', TextToTypeSubCategory.KEYS_R_AND_U));
    this.array.push(new TrainingKeysHtmlComponent('EI', TextToTypeSubCategory.KEYS_E_AND_I));
    this.array.push(new TrainingKeysHtmlComponent('ERUI', TextToTypeSubCategory.KEYS_ERUI));
    this.array.push(new TrainingKeysHtmlComponent('WO', TextToTypeSubCategory.KEYS_W_AND_O));
    this.array.push(new TrainingKeysHtmlComponent('QP', TextToTypeSubCategory.KEYS_Q_AND_P));
    this.array.push(new TrainingKeysHtmlComponent('QWOP', TextToTypeSubCategory.KEYS_QWOP));
    this.array.push(new TrainingKeysHtmlComponent('TY', TextToTypeSubCategory.KEYS_T_AND_Y));
    this.array.push(new TrainingKeysHtmlComponent('RTYU', TextToTypeSubCategory.KEYS_RTYU));

    this.array.push(new TrainingKeysHtmlComponent('VM', TextToTypeSubCategory.KEYS_V_AND_M));
    this.array.push(new TrainingKeysHtmlComponent('C,', TextToTypeSubCategory.KEYS_C_AND_COMMA));
    this.array.push(new TrainingKeysHtmlComponent('CVM,', TextToTypeSubCategory.KEYS_CVM_COMMA));
    this.array.push(new TrainingKeysHtmlComponent('X.', TextToTypeSubCategory.KEYS_X_AND_DOT));
    this.array.push(new TrainingKeysHtmlComponent('Z/', TextToTypeSubCategory.KEYS_Z_AND_SLASH));
    this.array.push(new TrainingKeysHtmlComponent('ZX./', TextToTypeSubCategory.KEYS_ZX_DOT_SLASH));
    this.array.push(new TrainingKeysHtmlComponent('BN', TextToTypeSubCategory.KEYS_B_AND_N));
    this.array.push(new TrainingKeysHtmlComponent('VBNM', TextToTypeSubCategory.KEYS_VBNM));
  }

  toHtml() {
    return /* html */ `
      <div class="training-container">
        ${this.array.map((k) => k.toHtml()).join('')}
      </div>
    `;
  }

  postInsertHtml(): void {
    this.array.forEach((c) => c.postInsertHtml());
  }
}
