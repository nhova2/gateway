import { MultiUserModule } from "./muser.module";

describe('gestionModule', () => {
  let multiUserModule: MultiUserModule;

  beforeEach(() => {
    multiUserModule = new MultiUserModule();
  });

  it('should create an instance', () => {
    expect(multiUserModule).toBeTruthy();
  });
});