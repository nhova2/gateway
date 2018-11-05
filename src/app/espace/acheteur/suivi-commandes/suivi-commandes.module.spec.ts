import { SuiviCommandesModule } from './suivi-commandes.module';

describe('SuiviCommandesModule', () => {
  let suiviCommandesModule: SuiviCommandesModule;

  beforeEach(() => {
    suiviCommandesModule = new SuiviCommandesModule();
  });

  it('should create an instance', () => {
    expect(suiviCommandesModule).toBeTruthy();
  });
});
