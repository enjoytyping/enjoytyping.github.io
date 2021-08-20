import { SelectOption } from '../components/_core/select/select.component';
import { TextToTypeCategory } from './text-to-type-category.enum';

export enum TextToTypeSubCategory {
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
  KEYS_QSLM = 'KEYS_SLQM',
  KEYS_G_AND_H = 'KEYS_G_AND_H',
  KEYS_FGHJ = 'KEYS_FGHJ',
  KEYS_A_AND_SEMI_COLON = 'KEYS_A_AND_SEMI_COLON',
  KEYS_ASL_SEMI_COLON = 'KEYS_ASL_SEMI_COLON',

  KEYS_R_AND_U = 'KEYS_R_AND_U',
  KEYS_E_AND_I = 'KEYS_E_AND_I',
  KEYS_ERUI = 'KEYS_RUEI',
  KEYS_Z_AND_O = 'KEYS_Z_AND_O',
  KEYS_A_AND_P = 'KEYS_A_AND_P',
  KEYS_AZOP = 'KEYS_AZOP',
  KEYS_T_AND_Y = 'KEYS_T_AND_Y',
  KEYS_RTYU = 'KEYS_RTYU',
  KEYS_W_AND_O = 'KEYS_W_AND_O',
  KEYS_Q_AND_P = 'KEYS_Q_AND_P',
  KEYS_QWOP = 'KEYS_QWOP',

  KEYS_V_AND_COMMA = 'KEYS_V_AND_COMMA',
  KEYS_C_AND_SEMI_COLON = 'KEYS_C_AND_SEMI_COLON',
  KEYS_CV_COMMA_SEMI_COLON = 'KEYS_CV_COMMA_SEMI_COLON',
  KEYS_X_AND_COLON = 'KEYS_X_AND_COLON',
  KEYS_W_AND_EX = 'KEYS_W_AND_EX',
  KEYS_WX_COLON_EX = 'KEYS_WX_COLON_EX',
  KEYS_B_AND_N = 'KEYS_B_AND_N',
  KEYS_VBN_COMMA = 'KEYS_VBN_COMMA',
  KEYS_V_AND_M = 'KEYS_V_AND_M',
  KEYS_C_AND_COMMA = 'KEYS_C_AND_COMMA',
  KEYS_CVM_COMMA = 'KEYS_CVM_COMMA',
  KEYS_X_AND_DOT = 'KEYS_X_AND_DOT',
  KEYS_Z_AND_SLASH = 'KEYS_Z_AND_SLASH',
  KEYS_ZX_DOT_SLASH = 'KEYS_ZX_DOT_SLASH',
  KEYS_VBNM = 'KEYS_VBNM',
}

export function getTextToTypeSubCategory(category: TextToTypeCategory): SelectOption<TextToTypeSubCategory>[] {
  switch (category) {
    // case TextToTypeCategory.TRAINING_AZERTY: {
    //   return [
    //     {
    //       label: 'Keys FJ',
    //       value: TextToTypeSubCategory.KEYS_F_AND_J,
    //     },
    //     {
    //       label: 'Keys DK',
    //       value: TextToTypeSubCategory.KEYS_D_AND_K,
    //     },
    //     {
    //       label: 'Keys FJDK',
    //       value: TextToTypeSubCategory.KEYS_FJDK,
    //     },
    //     {
    //       label: 'Keys SL',
    //       value: TextToTypeSubCategory.KEYS_S_AND_L,
    //     },
    //     {
    //       label: 'Keys QM',
    //       value: TextToTypeSubCategory.KEYS_Q_AND_M,
    //     },
    //     {
    //       label: 'Keys SLQM',
    //       value: TextToTypeSubCategory.KEYS_QSLM,
    //     },
    //     {
    //       label: 'Keys GH',
    //       value: TextToTypeSubCategory.KEYS_G_AND_H,
    //     },
    //     {
    //       label: 'Keys FGHJ',
    //       value: TextToTypeSubCategory.KEYS_FGHJ,
    //     },

    //     {
    //       label: 'Keys RU',
    //       value: TextToTypeSubCategory.KEYS_R_AND_U,
    //     },
    //     {
    //       label: 'Keys EI',
    //       value: TextToTypeSubCategory.KEYS_E_AND_I,
    //     },
    //     {
    //       label: 'Keys RUEI',
    //       value: TextToTypeSubCategory.KEYS_ERUI,
    //     },
    //     {
    //       label: 'Keys ZO',
    //       value: TextToTypeSubCategory.KEYS_Z_AND_O,
    //     },
    //     {
    //       label: 'Keys AP',
    //       value: TextToTypeSubCategory.KEYS_A_AND_P,
    //     },
    //     {
    //       label: 'Keys AZOP',
    //       value: TextToTypeSubCategory.KEYS_AZOP,
    //     },
    //     {
    //       label: 'Keys TY',
    //       value: TextToTypeSubCategory.KEYS_T_AND_Y,
    //     },
    //     {
    //       label: 'Keys RTYU',
    //       value: TextToTypeSubCategory.KEYS_RTYU,
    //     },

    //     {
    //       label: 'Keys V,',
    //       value: TextToTypeSubCategory.KEYS_V_AND_COMMA,
    //     },
    //     {
    //       label: 'Keys C;',
    //       value: TextToTypeSubCategory.KEYS_C_AND_SEMI_COLON,
    //     },
    //     {
    //       label: 'Keys CV,;',
    //       value: TextToTypeSubCategory.KEYS_CV_COMMA_SEMI_COLON,
    //     },
    //     {
    //       label: 'Keys X:',
    //       value: TextToTypeSubCategory.KEYS_X_AND_COLON,
    //     },
    //     {
    //       label: 'Keys W!',
    //       value: TextToTypeSubCategory.KEYS_W_AND_EX,
    //     },
    //     {
    //       label: 'Keys WX:!',
    //       value: TextToTypeSubCategory.KEYS_WX_COLON_EX,
    //     },
    //     {
    //       label: 'Keys BN',
    //       value: TextToTypeSubCategory.KEYS_B_AND_N,
    //     },
    //     {
    //       label: 'Keys VBN,',
    //       value: TextToTypeSubCategory.KEYS_VBN_COMMA,
    //     },
    //   ];
    // }
    // case TextToTypeCategory.TRAINING_QWERTY: {
    //   return [
    //     {
    //       label: 'Keys FJ',
    //       value: TextToTypeSubCategory.KEYS_F_AND_J,
    //     },
    //     {
    //       label: 'Keys DK',
    //       value: TextToTypeSubCategory.KEYS_D_AND_K,
    //     },
    //     {
    //       label: 'Keys FJDK',
    //       value: TextToTypeSubCategory.KEYS_FJDK,
    //     },
    //     {
    //       label: 'Keys SL',
    //       value: TextToTypeSubCategory.KEYS_S_AND_L,
    //     },
    //     {
    //       label: 'Keys A;',
    //       value: TextToTypeSubCategory.KEYS_A_AND_SEMI_COLON,
    //     },
    //     {
    //       label: 'Keys ASL;',
    //       value: TextToTypeSubCategory.KEYS_ASL_SEMI_COLON,
    //     },
    //     {
    //       label: 'Keys GH',
    //       value: TextToTypeSubCategory.KEYS_G_AND_H,
    //     },
    //     {
    //       label: 'Keys FGHJ',
    //       value: TextToTypeSubCategory.KEYS_FGHJ,
    //     },

    //     {
    //       label: 'Keys RU',
    //       value: TextToTypeSubCategory.KEYS_R_AND_U,
    //     },
    //     {
    //       label: 'Keys EI',
    //       value: TextToTypeSubCategory.KEYS_E_AND_I,
    //     },
    //     {
    //       label: 'Keys RUEI',
    //       value: TextToTypeSubCategory.KEYS_ERUI,
    //     },
    //     {
    //       label: 'Keys WO',
    //       value: TextToTypeSubCategory.KEYS_W_AND_O,
    //     },
    //     {
    //       label: 'Keys QP',
    //       value: TextToTypeSubCategory.KEYS_Q_AND_P,
    //     },
    //     {
    //       label: 'Keys QWOP',
    //       value: TextToTypeSubCategory.KEYS_QWOP,
    //     },
    //     {
    //       label: 'Keys TY',
    //       value: TextToTypeSubCategory.KEYS_T_AND_Y,
    //     },
    //     {
    //       label: 'Keys RTYU',
    //       value: TextToTypeSubCategory.KEYS_RTYU,
    //     },

    //     {
    //       label: 'Keys VM',
    //       value: TextToTypeSubCategory.KEYS_V_AND_M,
    //     },
    //     {
    //       label: 'Keys C,',
    //       value: TextToTypeSubCategory.KEYS_C_AND_COMMA,
    //     },
    //     {
    //       label: 'Keys CVM,',
    //       value: TextToTypeSubCategory.KEYS_CVM_COMMA,
    //     },
    //     {
    //       label: 'Keys X.',
    //       value: TextToTypeSubCategory.KEYS_X_AND_DOT,
    //     },
    //     {
    //       label: 'Keys Z/',
    //       value: TextToTypeSubCategory.KEYS_Z_AND_SLASH,
    //     },
    //     {
    //       label: 'Keys ZX./',
    //       value: TextToTypeSubCategory.KEYS_ZX_DOT_SLASH,
    //     },
    //     {
    //       label: 'Keys BN',
    //       value: TextToTypeSubCategory.KEYS_B_AND_N,
    //     },
    //     {
    //       label: 'Keys VBNM',
    //       value: TextToTypeSubCategory.KEYS_VBNM,
    //     },
    //   ];
    // }
    case TextToTypeCategory.CODE: {
      return [
        {
          label: 'Java',
          value: TextToTypeSubCategory.JAVA,
        },
        {
          label: 'Python',
          value: TextToTypeSubCategory.PYTHON,
        },
        {
          label: 'HTML',
          value: TextToTypeSubCategory.HTML,
        },
      ];
    }
    case TextToTypeCategory.QUOTES:
    case TextToTypeCategory.POEMS:
    case TextToTypeCategory.STORIES: {
      return [
        {
          label: 'English',
          value: TextToTypeSubCategory.ENGLISH,
        },
        {
          label: 'French',
          value: TextToTypeSubCategory.FRENCH,
        },
      ];
    }
    default: {
      return [];
    }
  }
}
