import { HistoriqueCommandesModule } from './historique-commandes.module';

describe('HistoriqueCommandesModule', () => {
  let historiqueCommandesModule: HistoriqueCommandesModule;

  beforeEach(() => {
    historiqueCommandesModule = new HistoriqueCommandesModule();
  });

  it('should create an instance', () => {
    expect(historiqueCommandesModule).toBeTruthy();
  });
});
