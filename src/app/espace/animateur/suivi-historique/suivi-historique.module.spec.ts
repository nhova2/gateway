import { SuiviHistoriqueModule } from './suivi-historique.module';

describe('SuiviHistoriqueModule', () => {
  let suiviHistoriqueModule: SuiviHistoriqueModule;

  beforeEach(() => {
    suiviHistoriqueModule = new SuiviHistoriqueModule();
  });

  it('should create an instance', () => {
    expect(suiviHistoriqueModule).toBeTruthy();
  });
});
