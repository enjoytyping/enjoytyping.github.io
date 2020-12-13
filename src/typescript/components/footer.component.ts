import { BaseStaticBlockHtmlComponent } from './base/base-static-block-component';

export class FooterHtmlComponent extends BaseStaticBlockHtmlComponent {
  __toHtml() {
    return /* html */ `
      <footer>
        <p>This website was mainly inspired from <b><a href="https://www.keybr.com/" target="_blank">keybr</a></b> website, really great job!</p>
        <p>What we can find in our website, is the ability to write <b>Codes</b>, <b>Quotes</b>, <b>Poems</b>, ... while improving your typing skills 🙂</p>
        <p>For any suggestion, please feel free to create a <b><a href="https://github.com/devkeyboard/devkeyboard.github.io/issues/new" target="_blank">ticket</a></b> in our github repository and we will try to add it ASAP</p>
        <p class="copyright">© 2020 devkeyboard.github.io</p>
      </footer>
    `;
  }
}
