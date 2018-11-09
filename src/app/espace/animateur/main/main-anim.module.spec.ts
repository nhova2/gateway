import { MainAnimModule } from "./main-anim.module";


describe('MainModule', () => {
  let mainModule: MainAnimModule;

  beforeEach(() => {
    mainModule = new MainAnimModule();
  });

  it('should create an instance', () => {
    expect(mainModule).toBeTruthy();
  });
});
