import './training.scss';
import { TrainingKeysHtmlComponent } from './training-keys.component';
import { TextToTypeSubCategory } from '../../state/text-to-type-sub-category.enum';
import { BaseTrainingHtmlComponent } from './base-training.component';

export class QwertyTrainingHtmlComponent extends BaseTrainingHtmlComponent {
  getComponents(): TrainingKeysHtmlComponent[] {
    const res = [];
    res.push(new TrainingKeysHtmlComponent('FJ', TextToTypeSubCategory.KEYS_F_AND_J));
    res.push(new TrainingKeysHtmlComponent('DK', TextToTypeSubCategory.KEYS_D_AND_K));
    res.push(new TrainingKeysHtmlComponent('DFJK', TextToTypeSubCategory.KEYS_FJDK));
    res.push(new TrainingKeysHtmlComponent('SL', TextToTypeSubCategory.KEYS_S_AND_L));
    res.push(new TrainingKeysHtmlComponent('A;', TextToTypeSubCategory.KEYS_A_AND_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('ASL;', TextToTypeSubCategory.KEYS_ASL_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('GH', TextToTypeSubCategory.KEYS_G_AND_H));
    res.push(new TrainingKeysHtmlComponent('FGHJ', TextToTypeSubCategory.KEYS_FGHJ));

    res.push(new TrainingKeysHtmlComponent('RU', TextToTypeSubCategory.KEYS_R_AND_U));
    res.push(new TrainingKeysHtmlComponent('EI', TextToTypeSubCategory.KEYS_E_AND_I));
    res.push(new TrainingKeysHtmlComponent('ERUI', TextToTypeSubCategory.KEYS_ERUI));
    res.push(new TrainingKeysHtmlComponent('WO', TextToTypeSubCategory.KEYS_W_AND_O));
    res.push(new TrainingKeysHtmlComponent('QP', TextToTypeSubCategory.KEYS_Q_AND_P));
    res.push(new TrainingKeysHtmlComponent('QWOP', TextToTypeSubCategory.KEYS_QWOP));
    res.push(new TrainingKeysHtmlComponent('TY', TextToTypeSubCategory.KEYS_T_AND_Y));
    res.push(new TrainingKeysHtmlComponent('RTYU', TextToTypeSubCategory.KEYS_RTYU));

    res.push(new TrainingKeysHtmlComponent('VM', TextToTypeSubCategory.KEYS_V_AND_M));
    res.push(new TrainingKeysHtmlComponent('C,', TextToTypeSubCategory.KEYS_C_AND_COMMA));
    res.push(new TrainingKeysHtmlComponent('CVM,', TextToTypeSubCategory.KEYS_CVM_COMMA));
    res.push(new TrainingKeysHtmlComponent('X.', TextToTypeSubCategory.KEYS_X_AND_DOT));
    res.push(new TrainingKeysHtmlComponent('Z/', TextToTypeSubCategory.KEYS_Z_AND_SLASH));
    res.push(new TrainingKeysHtmlComponent('ZX./', TextToTypeSubCategory.KEYS_ZX_DOT_SLASH));
    res.push(new TrainingKeysHtmlComponent('BN', TextToTypeSubCategory.KEYS_B_AND_N));
    res.push(new TrainingKeysHtmlComponent('VBNM', TextToTypeSubCategory.KEYS_VBNM));
    return res;
  }
}
