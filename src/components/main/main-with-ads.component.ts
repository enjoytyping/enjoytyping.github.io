import './main.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { MainHtmlComponent } from './main.component';
import IAdsService from '../../services/ads/ads.service';
import AmazonAdsService from '../../services/ads/amazon-ads.service';
import { CHANGE_THEME_EVENT } from '../../constants/constant';

const ADS_COUNT = 3;

export class MainWithAdsHtmlComponent extends BaseHtmlComponent {
  private main: MainHtmlComponent;
  private leftAdvertiseContainerId: string;
  private leftAdvertiseContainer: HTMLElement;
  private rightAdvertiseContainerId: string;
  private rightAdvertiseContainer: HTMLElement;

  constructor(private adsService: IAdsService = new AmazonAdsService()) {
    super();
    this.main = new MainHtmlComponent();
    this.leftAdvertiseContainerId = this.generateId();
    this.rightAdvertiseContainerId = this.generateId();
  }

  preInsertHtml(): void {
    this.main.preInsertHtml();
  }
  toHtml(): string {
    const ads = this.adsService.getAds(ADS_COUNT);
    return /* html */ `
      <div class="main-with-ads-container">
        <div id="${this.leftAdvertiseContainerId}" class="advertise-container left-advertise-container">
          ${ads.left}
        </div>
        ${this.main.toHtml()}
        <div id="${this.rightAdvertiseContainerId}" class="advertise-container right-advertise-container">
          ${ads.right}
        </div>
      </div>
    `;
  }
  postInsertHtml(): void {
    this.main.postInsertHtml();
    this.leftAdvertiseContainer = document.getElementById(this.leftAdvertiseContainerId);
    this.rightAdvertiseContainer = document.getElementById(this.rightAdvertiseContainerId);
    this.addCustomEventListener(CHANGE_THEME_EVENT, this.handleChangeThemeEvent.bind(this));
  }

  private handleChangeThemeEvent() {
    const ads = this.adsService.getAds(ADS_COUNT);
    this.leftAdvertiseContainer.innerHTML = ads.left;
    this.rightAdvertiseContainer.innerHTML = ads.right;
  }
}
