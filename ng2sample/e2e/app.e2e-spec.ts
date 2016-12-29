import { Ng2samplePage } from './app.po';

describe('ng2sample App', function() {
  let page: Ng2samplePage;

  beforeEach(() => {
    page = new Ng2samplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
