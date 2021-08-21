import './training.scss';
import { TrainingKeysHtmlComponent } from './training-keys.component';
import { TextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { BaseTrainingHtmlComponent } from './base-training.component';

export class AzertyTrainingHtmlComponent extends BaseTrainingHtmlComponent {
  preInsertHtml(): void {
    this.array.push(new TrainingKeysHtmlComponent('FJ', TextToTypeSubCategory.KEYS_F_AND_J));
    this.array.push(new TrainingKeysHtmlComponent('DK', TextToTypeSubCategory.KEYS_D_AND_K));
    this.array.push(new TrainingKeysHtmlComponent('DFJK', TextToTypeSubCategory.KEYS_FJDK));
    this.array.push(new TrainingKeysHtmlComponent('SL', TextToTypeSubCategory.KEYS_S_AND_L));
    this.array.push(new TrainingKeysHtmlComponent('QM', TextToTypeSubCategory.KEYS_Q_AND_M));
    this.array.push(new TrainingKeysHtmlComponent('QSLM', TextToTypeSubCategory.KEYS_QSLM));
    this.array.push(new TrainingKeysHtmlComponent('GH', TextToTypeSubCategory.KEYS_G_AND_H));
    this.array.push(new TrainingKeysHtmlComponent('FGHJ', TextToTypeSubCategory.KEYS_FGHJ));

    this.array.push(new TrainingKeysHtmlComponent('RU', TextToTypeSubCategory.KEYS_R_AND_U));
    this.array.push(new TrainingKeysHtmlComponent('EI', TextToTypeSubCategory.KEYS_E_AND_I));
    this.array.push(new TrainingKeysHtmlComponent('ERUI', TextToTypeSubCategory.KEYS_ERUI));
    this.array.push(new TrainingKeysHtmlComponent('ZO', TextToTypeSubCategory.KEYS_Z_AND_O));
    this.array.push(new TrainingKeysHtmlComponent('AP', TextToTypeSubCategory.KEYS_A_AND_P));
    this.array.push(new TrainingKeysHtmlComponent('AZOP', TextToTypeSubCategory.KEYS_AZOP));
    this.array.push(new TrainingKeysHtmlComponent('TY', TextToTypeSubCategory.KEYS_T_AND_Y));
    this.array.push(new TrainingKeysHtmlComponent('RTYU', TextToTypeSubCategory.KEYS_RTYU));

    this.array.push(new TrainingKeysHtmlComponent('V,', TextToTypeSubCategory.KEYS_V_AND_COMMA));
    this.array.push(new TrainingKeysHtmlComponent('C;', TextToTypeSubCategory.KEYS_C_AND_SEMI_COLON));
    this.array.push(new TrainingKeysHtmlComponent('CV,;', TextToTypeSubCategory.KEYS_CV_COMMA_SEMI_COLON));
    this.array.push(new TrainingKeysHtmlComponent('X:', TextToTypeSubCategory.KEYS_X_AND_COLON));
    this.array.push(new TrainingKeysHtmlComponent('W!', TextToTypeSubCategory.KEYS_W_AND_EX));
    this.array.push(new TrainingKeysHtmlComponent('WX:!', TextToTypeSubCategory.KEYS_WX_COLON_EX));
    this.array.push(new TrainingKeysHtmlComponent('BN', TextToTypeSubCategory.KEYS_B_AND_N));
    this.array.push(new TrainingKeysHtmlComponent('VBN,', TextToTypeSubCategory.KEYS_VBN_COMMA));
  }
}
