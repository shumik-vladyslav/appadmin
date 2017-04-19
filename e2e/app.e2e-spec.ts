import { AppadminPage } from './app.po';

describe('appadmin App', () => {
  let page: AppadminPage;

  beforeEach(() => {
    page = new AppadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
