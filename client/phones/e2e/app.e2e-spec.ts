import { PhonesListPage } from './app.po';

describe('phones App', () => {
  let page: PhonesListPage;

  beforeEach(() => {
    page = new PhonesListPage();
  });

  it('should display phones list page', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('MOBILE PHONES LIST');
  });

  it('should show two phones when we first load the app', () => {
    page.navigateTo();
    expect(page.getPhonesCount()).toEqual(2);
  });
});
