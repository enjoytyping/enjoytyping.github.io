import './main.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { MainHtmlComponent } from './main.component';

export class MainWithAdsHtmlComponent extends BaseHtmlComponent {
  private main: MainHtmlComponent;

  constructor() {
    super();
    this.main = new MainHtmlComponent();
  }

  preInsertHtml(): void {
    this.main.preInsertHtml();
  }
  toHtml(): string {
    return /* html */ `
      <div class="main-with-ads-container">
        <div class="advertise-container left-advertise-container">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2548132401734517"
              crossorigin="anonymous"></script>
          <!-- Ad1 -->
          <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-2548132401734517"
              data-ad-slot="6925833672"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        ${this.main.toHtml()}
        <div class="advertise-container right-advertise-container">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2548132401734517"
              crossorigin="anonymous"></script>
          <!-- right-ad -->
          <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-2548132401734517"
              data-ad-slot="5366814778"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </div>
    `;
  }
  postInsertHtml(): void {
    this.main.postInsertHtml();
  }
}
