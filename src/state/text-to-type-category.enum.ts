import { SelectOption } from '../components/_core/select/select.component';

export enum TextToTypeCategory {
  TRAINING_AZERTY = 'TRAINING_AZERTY',
  TRAINING_QWERTY = 'TRAINING_QWERTY',
  QUOTES = 'QUOTES',
  POEMS = 'POEMS',
  STORIES = 'STORIES',
  CODE = 'CODE',
  RANDOM_TEXT = 'RANDOM_TEXT',
  CUSTOM_TEXT = 'CUSTOM_TEXT',
}

export const TEXT_TO_TYPE_CATEGORIES: SelectOption<TextToTypeCategory>[] = [
  {
    label: 'Training (azerty)',
    value: TextToTypeCategory.TRAINING_AZERTY,
  },
  {
    label: 'Training (qwerty)',
    value: TextToTypeCategory.TRAINING_QWERTY,
  },
  {
    label: 'Quotes',
    value: TextToTypeCategory.QUOTES,
  },
  {
    label: 'Poems',
    value: TextToTypeCategory.POEMS,
  },
  {
    label: 'Stories',
    value: TextToTypeCategory.STORIES,
  },
  {
    label: 'Code',
    value: TextToTypeCategory.CODE,
  },
  {
    label: 'Random Text',
    value: TextToTypeCategory.RANDOM_TEXT,
  },
  {
    label: 'Custom Text',
    value: TextToTypeCategory.CUSTOM_TEXT,
  },
];
