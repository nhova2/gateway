import { DevisModule } from './devis.module';

describe('DevisModule', () => {
  let devisModule: DevisModule;

  beforeEach(() => {
    devisModule = new DevisModule();
  });

  it('should create an instance', () => {
    expect(devisModule).toBeTruthy();
  });
});
