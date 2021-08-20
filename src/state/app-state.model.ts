import { TextToTypeCategory } from './text-to-type-category.enum';
import { TypedTextStats } from '../components/typed-text-stats/typed-text-stats.model';
import { TextToTypeSubCategory } from './text-to-type-sub-category.enum';
import { TextToType } from '../components/text-to-type/text-to-type.model';

export class AppState {
  customTextsToType: TextToType[];
  visitWebsiteForTheFirstTime: boolean = true;
  textToTypeCategory: TextToTypeCategory = TextToTypeCategory.QUOTES;
  textToTypeSubCategory: TextToTypeSubCategory = TextToTypeSubCategory.ENGLISH;
  maxCharactersToType: number;
  currentTheme: string;
  enableSounds: boolean;
  enableCapitalLetters: boolean;
  enablePunctuationCharacters: boolean;
  stopOnError: boolean;
  textToTypeIndex: number = 0;
  typedTextsStats: TypedTextStats[] = [];
  typedKeysStatsJson: string;
}
