import { ReactiveFormNgPage } from './app.po';

describe('reactive-form-ng App', function() {
  let page: ReactiveFormNgPage;

  beforeEach(() => {
    page = new ReactiveFormNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
