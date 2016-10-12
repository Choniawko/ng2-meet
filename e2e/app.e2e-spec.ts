import { Meet2Page } from './app.po';

describe('meet2 App', function() {
  let page: Meet2Page;

  beforeEach(() => {
    page = new Meet2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
