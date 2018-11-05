import { AlertesModule } from './alertes.module';

describe('AlertesModule', () => {
  let alertesModule: AlertesModule;

  beforeEach(() => {
    alertesModule = new AlertesModule();
  });

  it('should create an instance', () => {
    expect(alertesModule).toBeTruthy();
  });
});
