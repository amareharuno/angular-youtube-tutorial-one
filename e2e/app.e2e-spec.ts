import { AngularYoutubeTutorialOnePage } from './app.po';

describe('angular-youtube-tutorial-one App', () => {
  let page: AngularYoutubeTutorialOnePage;

  beforeEach(() => {
    page = new AngularYoutubeTutorialOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
