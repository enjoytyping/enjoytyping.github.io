import './training.scss';
import { TrainingKeysHtmlComponent } from './training-keys.component';
import { TextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { BaseTrainingHtmlComponent } from './base-training.component';

export class AzertyTrainingHtmlComponent extends BaseTrainingHtmlComponent {
  getComponents(): TrainingKeysHtmlComponent[] {
    const res = [];
    res.push(new TrainingKeysHtmlComponent('FJ', TextToTypeSubCategory.KEYS_F_AND_J));
    res.push(new TrainingKeysHtmlComponent('DK', TextToTypeSubCategory.KEYS_D_AND_K));
    res.push(new TrainingKeysHtmlComponent('DFJK', TextToTypeSubCategory.KEYS_FJDK));
    res.push(new TrainingKeysHtmlComponent('SL', TextToTypeSubCategory.KEYS_S_AND_L));
    res.push(new TrainingKeysHtmlComponent('QM', TextToTypeSubCategory.KEYS_Q_AND_M));
    res.push(new TrainingKeysHtmlComponent('QSLM', TextToTypeSubCategory.KEYS_QSLM));
    res.push(new TrainingKeysHtmlComponent('GH', TextToTypeSubCategory.KEYS_G_AND_H));
    res.push(new TrainingKeysHtmlComponent('FGHJ', TextToTypeSubCategory.KEYS_FGHJ));

    res.push(new TrainingKeysHtmlComponent('RU', TextToTypeSubCategory.KEYS_R_AND_U));
    res.push(new TrainingKeysHtmlComponent('EI', TextToTypeSubCategory.KEYS_E_AND_I));
    res.push(new TrainingKeysHtmlComponent('ERUI', TextToTypeSubCategory.KEYS_ERUI));
    res.push(new TrainingKeysHtmlComponent('ZO', TextToTypeSubCategory.KEYS_Z_AND_O));
    res.push(new TrainingKeysHtmlComponent('AP', TextToTypeSubCategory.KEYS_A_AND_P));
    res.push(new TrainingKeysHtmlComponent('AZOP', TextToTypeSubCategory.KEYS_AZOP));
    res.push(new TrainingKeysHtmlComponent('TY', TextToTypeSubCategory.KEYS_T_AND_Y));
    res.push(new TrainingKeysHtmlComponent('RTYU', TextToTypeSubCategory.KEYS_RTYU));

    res.push(new TrainingKeysHtmlComponent('V,', TextToTypeSubCategory.KEYS_V_AND_COMMA));
    res.push(new TrainingKeysHtmlComponent('C;', TextToTypeSubCategory.KEYS_C_AND_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('CV,;', TextToTypeSubCategory.KEYS_CV_COMMA_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('X:', TextToTypeSubCategory.KEYS_X_AND_COLON));
    res.push(new TrainingKeysHtmlComponent('W!', TextToTypeSubCategory.KEYS_W_AND_EX));
    res.push(new TrainingKeysHtmlComponent('WX:!', TextToTypeSubCategory.KEYS_WX_COLON_EX));
    res.push(new TrainingKeysHtmlComponent('BN', TextToTypeSubCategory.KEYS_B_AND_N));
    res.push(new TrainingKeysHtmlComponent('VBN,', TextToTypeSubCategory.KEYS_VBN_COMMA));
    return res;
  }
}
