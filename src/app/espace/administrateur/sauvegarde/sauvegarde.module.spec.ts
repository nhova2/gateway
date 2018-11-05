import { SauvegardeModule } from './sauvegarde.module';

describe('SauvegardeModule', () => {
  let sauvegardeModule: SauvegardeModule;

  beforeEach(() => {
    sauvegardeModule = new SauvegardeModule();
  });

  it('should create an instance', () => {
    expect(sauvegardeModule).toBeTruthy();
  });
});
