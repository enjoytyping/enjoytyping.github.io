import Ads from './ads.model';

export default interface IAdsService {
  getAds(count: number): Ads;
}
