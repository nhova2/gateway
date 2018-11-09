import { MainFournissModule } from "./main-fourniss.module";


describe('MainModule', () => {
  let mainModule: MainFournissModule;

  beforeEach(() => {
    mainModule = new MainFournissModule();
  });

  it('should create an instance', () => {
    expect(mainModule).toBeTruthy();
  });
});
