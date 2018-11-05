import { DemandeDevisModule } from './demande-devis.module';

describe('DemandeDevisModule', () => {
  let demandeDevisModule: DemandeDevisModule;

  beforeEach(() => {
    demandeDevisModule = new DemandeDevisModule();
  });

  it('should create an instance', () => {
    expect(demandeDevisModule).toBeTruthy();
  });
});
