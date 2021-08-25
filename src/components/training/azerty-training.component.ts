import './training.scss';
import { TrainingKeysHtmlComponent } from './training-keys.component';
import { BaseTrainingHtmlComponent } from './base-training.component';
import { TrainingLesson } from './training-lesson.enum';

export class AzertyTrainingHtmlComponent extends BaseTrainingHtmlComponent {
  getComponents(): TrainingKeysHtmlComponent[] {
    const res = [];
    res.push(new TrainingKeysHtmlComponent('FJ', TrainingLesson.KEYS_F_AND_J));
    res.push(new TrainingKeysHtmlComponent('DK', TrainingLesson.KEYS_D_AND_K));
    res.push(new TrainingKeysHtmlComponent('DFJK', TrainingLesson.KEYS_FJDK));
    res.push(new TrainingKeysHtmlComponent('SL', TrainingLesson.KEYS_S_AND_L));
    res.push(new TrainingKeysHtmlComponent('QM', TrainingLesson.KEYS_Q_AND_M));
    res.push(new TrainingKeysHtmlComponent('QSLM', TrainingLesson.KEYS_QSLM));
    res.push(new TrainingKeysHtmlComponent('GH', TrainingLesson.KEYS_G_AND_H));
    res.push(new TrainingKeysHtmlComponent('FGHJ', TrainingLesson.KEYS_FGHJ));

    res.push(new TrainingKeysHtmlComponent('RU', TrainingLesson.KEYS_R_AND_U));
    res.push(new TrainingKeysHtmlComponent('EI', TrainingLesson.KEYS_E_AND_I));
    res.push(new TrainingKeysHtmlComponent('ERUI', TrainingLesson.KEYS_ERUI));
    res.push(new TrainingKeysHtmlComponent('ZO', TrainingLesson.KEYS_Z_AND_O));
    res.push(new TrainingKeysHtmlComponent('AP', TrainingLesson.KEYS_A_AND_P));
    res.push(new TrainingKeysHtmlComponent('AZOP', TrainingLesson.KEYS_AZOP));
    res.push(new TrainingKeysHtmlComponent('TY', TrainingLesson.KEYS_T_AND_Y));
    res.push(new TrainingKeysHtmlComponent('RTYU', TrainingLesson.KEYS_RTYU));

    res.push(new TrainingKeysHtmlComponent('V,', TrainingLesson.KEYS_V_AND_COMMA));
    res.push(new TrainingKeysHtmlComponent('C;', TrainingLesson.KEYS_C_AND_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('CV,;', TrainingLesson.KEYS_CV_COMMA_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('X:', TrainingLesson.KEYS_X_AND_COLON));
    res.push(new TrainingKeysHtmlComponent('W!', TrainingLesson.KEYS_W_AND_EX));
    res.push(new TrainingKeysHtmlComponent('WX:!', TrainingLesson.KEYS_WX_COLON_EX));
    res.push(new TrainingKeysHtmlComponent('BN', TrainingLesson.KEYS_B_AND_N));
    res.push(new TrainingKeysHtmlComponent('VBN,', TrainingLesson.KEYS_VBN_COMMA));
    return res;
  }
}
