import { StorageFirebasePage } from './app.po';

describe('storage-firebase App', () => {
  let page: StorageFirebasePage;

  beforeEach(() => {
    page = new StorageFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
