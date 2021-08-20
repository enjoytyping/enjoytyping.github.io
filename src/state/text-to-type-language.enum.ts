import { SelectOption } from '../components/_core/select/select.component';
import { TextToTypeCategory } from './text-to-type-category.enum';

export enum TextToTypeLanguage {
  ENGLISH = 'ENGLISH',
  FRENCH = 'FRENCH',
  JAVA = 'JAVA',
  PYTHON = 'PYTHON',
  HTML = 'HTML',

  KEYS_F_AND_J = 'KEYS_F_AND_J',
  KEYS_D_AND_K = 'KEYS_D_AND_K',
  KEYS_FJDK = 'KEYS_FJDK',
  KEYS_S_AND_L = 'KEYS_S_AND_L',
  KEYS_Q_AND_M = 'KEYS_Q_AND_M',
  KEYS_SLQM = 'KEYS_SLQM',
  KEYS_G_AND_H = 'KEYS_G_AND_H',
  KEYS_A_AND_SEMI_COLON = 'KEYS_A_AND_SEMI_COLON',
  KEYS_ASL_SEMI_COLON = 'KEYS_ASL_SEMI_COLON',
  HOME_ROW = 'HOME_ROW',

  KEYS_R_AND_U = 'KEYS_R_AND_U',
  KEYS_E_AND_I = 'KEYS_E_AND_I',
  KEYS_RUEI = 'KEYS_RUEI',
  KEYS_Z_AND_O = 'KEYS_Z_AND_O',
  KEYS_A_AND_P = 'KEYS_A_AND_P',
  KEYS_AZOP = 'KEYS_AZOP',
  KEYS_T_AND_Y = 'KEYS_T_AND_Y',
  KEYS_W_AND_O = 'KEYS_W_AND_O',
  KEYS_Q_AND_P = 'KEYS_Q_AND_P',
  KEYS_QWOP = 'KEYS_QWOP',
  TOP_ROW = 'TOP_ROW',

  KEYS_V_AND_COMMA = 'KEYS_V_AND_COMMA',
  KEYS_C_AND_SEMI_COLON = 'KEYS_C_AND_SEMI_COLON',
  KEYS_CV_COMMA_SEMI_COLON = 'KEYS_CV_COMMA_SEMI_COLON',
  KEYS_X_AND_COLON = 'KEYS_X_AND_COLON',
  KEYS_W_AND_EX = 'KEYS_W_AND_EX',
  KEYS_WX_COLON_EX = 'KEYS_WX_COLON_EX',
  KEYS_B_AND_N = 'KEYS_B_AND_N',
  KEYS_V_AND_M = 'KEYS_V_AND_M',
  KEYS_C_AND_COMMA = 'KEYS_C_AND_COMMA',
  KEYS_CVM_COMMA = 'KEYS_CVM_COMMA',
  KEYS_X_AND_DOT = 'KEYS_X_AND_DOT',
  KEYS_Z_AND_SLASH = 'KEYS_Z_AND_SLASH',
  KEYS_ZX_DOT_SLASH = 'KEYS_ZX_DOT_SLASH',
  BOTTOM_ROW = 'BOTTOM_ROW',
}

export function getTextToTypeLanguage(category: TextToTypeCategory): SelectOption<TextToTypeLanguage>[] {
  switch (category) {
    case TextToTypeCategory.TRAINING_AZERTY: {
      return [
        {
          label: 'Keys fj',
          value: TextToTypeLanguage.KEYS_F_AND_J,
        },
        {
          label: 'Keys dk',
          value: TextToTypeLanguage.KEYS_D_AND_K,
        },
        {
          label: 'Keys fjdk',
          value: TextToTypeLanguage.KEYS_FJDK,
        },
        {
          label: 'Keys sl',
          value: TextToTypeLanguage.KEYS_S_AND_L,
        },
        {
          label: 'Keys qm',
          value: TextToTypeLanguage.KEYS_Q_AND_M,
        },
        {
          label: 'Keys slqm',
          value: TextToTypeLanguage.KEYS_SLQM,
        },
        {
          label: 'Keys gh',
          value: TextToTypeLanguage.KEYS_G_AND_H,
        },
        {
          label: 'Home Row',
          value: TextToTypeLanguage.HOME_ROW,
        },

        {
          label: 'Keys ru',
          value: TextToTypeLanguage.KEYS_R_AND_U,
        },
        {
          label: 'Keys ei',
          value: TextToTypeLanguage.KEYS_E_AND_I,
        },
        {
          label: 'Keys ruei',
          value: TextToTypeLanguage.KEYS_RUEI,
        },
        {
          label: 'Keys zo',
          value: TextToTypeLanguage.KEYS_Z_AND_O,
        },
        {
          label: 'Keys ap',
          value: TextToTypeLanguage.KEYS_A_AND_P,
        },
        {
          label: 'Keys azop',
          value: TextToTypeLanguage.KEYS_AZOP,
        },
        {
          label: 'Keys ty',
          value: TextToTypeLanguage.KEYS_T_AND_Y,
        },
        {
          label: 'Top Row',
          value: TextToTypeLanguage.TOP_ROW,
        },

        {
          label: 'Keys v,',
          value: TextToTypeLanguage.KEYS_V_AND_COMMA,
        },
        {
          label: 'Keys c;',
          value: TextToTypeLanguage.KEYS_C_AND_SEMI_COLON,
        },
        {
          label: 'Keys cv,;',
          value: TextToTypeLanguage.KEYS_CV_COMMA_SEMI_COLON,
        },
        {
          label: 'Keys x:',
          value: TextToTypeLanguage.KEYS_X_AND_COLON,
        },
        {
          label: 'Keys w!',
          value: TextToTypeLanguage.KEYS_W_AND_EX,
        },
        {
          label: 'Keys wx:!',
          value: TextToTypeLanguage.KEYS_WX_COLON_EX,
        },
        {
          label: 'Keys bn',
          value: TextToTypeLanguage.KEYS_B_AND_N,
        },
        {
          label: 'Bottom Row',
          value: TextToTypeLanguage.BOTTOM_ROW,
        },
      ];
    }
    case TextToTypeCategory.TRAINING_QWERTY: {
      return [
        {
          label: 'Keys fj',
          value: TextToTypeLanguage.KEYS_F_AND_J,
        },
        {
          label: 'Keys dk',
          value: TextToTypeLanguage.KEYS_D_AND_K,
        },
        {
          label: 'Keys fjdk',
          value: TextToTypeLanguage.KEYS_FJDK,
        },
        {
          label: 'Keys sl',
          value: TextToTypeLanguage.KEYS_S_AND_L,
        },
        {
          label: 'Keys a;',
          value: TextToTypeLanguage.KEYS_A_AND_SEMI_COLON,
        },
        {
          label: 'Keys asl;',
          value: TextToTypeLanguage.KEYS_ASL_SEMI_COLON,
        },
        {
          label: 'Keys gh',
          value: TextToTypeLanguage.KEYS_G_AND_H,
        },
        {
          label: 'Home Row',
          value: TextToTypeLanguage.HOME_ROW,
        },

        {
          label: 'Keys ru',
          value: TextToTypeLanguage.KEYS_R_AND_U,
        },
        {
          label: 'Keys ei',
          value: TextToTypeLanguage.KEYS_E_AND_I,
        },
        {
          label: 'Keys ruei',
          value: TextToTypeLanguage.KEYS_RUEI,
        },
        {
          label: 'Keys wo',
          value: TextToTypeLanguage.KEYS_W_AND_O,
        },
        {
          label: 'Keys qp',
          value: TextToTypeLanguage.KEYS_Q_AND_P,
        },
        {
          label: 'Keys qwop',
          value: TextToTypeLanguage.KEYS_QWOP,
        },
        {
          label: 'Keys ty',
          value: TextToTypeLanguage.KEYS_T_AND_Y,
        },
        {
          label: 'Top Row',
          value: TextToTypeLanguage.TOP_ROW,
        },

        {
          label: 'Keys vm',
          value: TextToTypeLanguage.KEYS_V_AND_M,
        },
        {
          label: 'Keys c,',
          value: TextToTypeLanguage.KEYS_C_AND_COMMA,
        },
        {
          label: 'Keys cvm,',
          value: TextToTypeLanguage.KEYS_CVM_COMMA,
        },
        {
          label: 'Keys x.',
          value: TextToTypeLanguage.KEYS_X_AND_DOT,
        },
        {
          label: 'Keys z/',
          value: TextToTypeLanguage.KEYS_Z_AND_SLASH,
        },
        {
          label: 'Keys zx./',
          value: TextToTypeLanguage.KEYS_ZX_DOT_SLASH,
        },
        {
          label: 'Keys bn',
          value: TextToTypeLanguage.KEYS_B_AND_N,
        },
        {
          label: 'Bottom Row',
          value: TextToTypeLanguage.BOTTOM_ROW,
        },
      ];
    }
    case TextToTypeCategory.CODE: {
      return [
        {
          label: 'Java',
          value: TextToTypeLanguage.JAVA,
        },
        {
          label: 'Python',
          value: TextToTypeLanguage.PYTHON,
        },
        {
          label: 'HTML',
          value: TextToTypeLanguage.HTML,
        },
      ];
    }
    default: {
      return [
        {
          label: 'English',
          value: TextToTypeLanguage.ENGLISH,
        },
        {
          label: 'French',
          value: TextToTypeLanguage.FRENCH,
        },
      ];
    }
  }
}
