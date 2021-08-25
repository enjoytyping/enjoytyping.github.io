import './training.scss';
import { TrainingKeysHtmlComponent } from './training-keys.component';
import { BaseTrainingHtmlComponent } from './base-training.component';
import { TrainingLesson } from './training-lesson.enum';

export class QwertyTrainingHtmlComponent extends BaseTrainingHtmlComponent {
  getComponents(): TrainingKeysHtmlComponent[] {
    const res = [];
    res.push(new TrainingKeysHtmlComponent('FJ', TrainingLesson.KEYS_F_AND_J));
    res.push(new TrainingKeysHtmlComponent('DK', TrainingLesson.KEYS_D_AND_K));
    res.push(new TrainingKeysHtmlComponent('DFJK', TrainingLesson.KEYS_FJDK));
    res.push(new TrainingKeysHtmlComponent('SL', TrainingLesson.KEYS_S_AND_L));
    res.push(new TrainingKeysHtmlComponent('A;', TrainingLesson.KEYS_A_AND_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('ASL;', TrainingLesson.KEYS_ASL_SEMI_COLON));
    res.push(new TrainingKeysHtmlComponent('GH', TrainingLesson.KEYS_G_AND_H));
    res.push(new TrainingKeysHtmlComponent('FGHJ', TrainingLesson.KEYS_FGHJ));

    res.push(new TrainingKeysHtmlComponent('RU', TrainingLesson.KEYS_R_AND_U));
    res.push(new TrainingKeysHtmlComponent('EI', TrainingLesson.KEYS_E_AND_I));
    res.push(new TrainingKeysHtmlComponent('ERUI', TrainingLesson.KEYS_ERUI));
    res.push(new TrainingKeysHtmlComponent('WO', TrainingLesson.KEYS_W_AND_O));
    res.push(new TrainingKeysHtmlComponent('QP', TrainingLesson.KEYS_Q_AND_P));
    res.push(new TrainingKeysHtmlComponent('QWOP', TrainingLesson.KEYS_QWOP));
    res.push(new TrainingKeysHtmlComponent('TY', TrainingLesson.KEYS_T_AND_Y));
    res.push(new TrainingKeysHtmlComponent('RTYU', TrainingLesson.KEYS_RTYU));

    res.push(new TrainingKeysHtmlComponent('VM', TrainingLesson.KEYS_V_AND_M));
    res.push(new TrainingKeysHtmlComponent('C,', TrainingLesson.KEYS_C_AND_COMMA));
    res.push(new TrainingKeysHtmlComponent('CVM,', TrainingLesson.KEYS_CVM_COMMA));
    res.push(new TrainingKeysHtmlComponent('X.', TrainingLesson.KEYS_X_AND_DOT));
    res.push(new TrainingKeysHtmlComponent('Z/', TrainingLesson.KEYS_Z_AND_SLASH));
    res.push(new TrainingKeysHtmlComponent('ZX./', TrainingLesson.KEYS_ZX_DOT_SLASH));
    res.push(new TrainingKeysHtmlComponent('BN', TrainingLesson.KEYS_B_AND_N));
    res.push(new TrainingKeysHtmlComponent('VBNM', TrainingLesson.KEYS_VBNM));
    return res;
  }
}
