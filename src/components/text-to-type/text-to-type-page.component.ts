import { IHtmlComponent } from '../_core/component.interface';
import { BaseHtmlContainer } from '../_core/base-container';
import { TypedTextHtmlComponent } from '../typed-text-stats/typed-text-stats.component';
import { TextToTypeHtmlComponent } from './text-to-type.component';
import { AppStateClient } from '../../state/app-state.client';
import { ViewTypingProgressButtonHtmlComponent } from './view-typing-progress-button.component';

export class TextToTypePageHtmlComponent extends BaseHtmlContainer {
  getComponents(): IHtmlComponent[] {
    const res = [];
    res.push(new TypedTextHtmlComponent(AppStateClient.getInstance()));
    res.push(new TextToTypeHtmlComponent(AppStateClient.getInstance()));
    res.push(new ViewTypingProgressButtonHtmlComponent(AppStateClient.getInstance()));
    return res;
  }
  getContainerBeginTag(): string {
    return '<div class="text-to-type-page">';
  }
  getContainerEndTag(): string {
    return '</div>';
  }

  getContainerQuerySelector(): string {
    return '.text-to-type-page';
  }
}
