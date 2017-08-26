import { TmanagerPage } from './app.po';

describe('tmanager App', () => {
  let page: TmanagerPage;

  beforeEach(() => {
    page = new TmanagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
