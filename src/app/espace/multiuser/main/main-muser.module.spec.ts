import { MainMuserModule } from "./main-muser.module";


describe('MainModule', () => {
  let mainModule: MainMuserModule;

  beforeEach(() => {
    mainModule = new MainMuserModule();
  });

  it('should create an instance', () => {
    expect(mainModule).toBeTruthy();
  });
});
