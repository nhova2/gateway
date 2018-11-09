import { DemandeModule } from './demande.module';

describe('DemandeModule', () => {
  let demandeModule: DemandeModule;

  beforeEach(() => {
    demandeModule = new DemandeModule();
  });

  it('should create an instance', () => {
    expect(demandeModule).toBeTruthy();
  });
});
