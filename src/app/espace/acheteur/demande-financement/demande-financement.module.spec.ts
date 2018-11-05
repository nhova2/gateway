import { DemandeFinancementModule } from './demande-financement.module';

describe('DemandeFinancementModule', () => {
  let demandeFinancementModule: DemandeFinancementModule;

  beforeEach(() => {
    demandeFinancementModule = new DemandeFinancementModule();
  });

  it('should create an instance', () => {
    expect(demandeFinancementModule).toBeTruthy();
  });
});
