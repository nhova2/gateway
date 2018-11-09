import { AlertesAnimateurModule } from './animateur-alertes.module';

describe('AlertesAnimateurModule', () => {
  let alertesAnimModule: AlertesAnimateurModule;

  beforeEach(() => {
    alertesAnimModule = new AlertesAnimateurModule();
  });

  it('should create an instance', () => {
    expect(alertesAnimModule).toBeTruthy();
  });
});
