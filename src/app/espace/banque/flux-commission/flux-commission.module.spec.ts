import { FluxCommissionModule } from './flux-commission.module';

describe('FluxCommissionModule', () => {
  let fluxCommissionModule: FluxCommissionModule;

  beforeEach(() => {
    fluxCommissionModule = new FluxCommissionModule();
  });

  it('should create an instance', () => {
    expect(fluxCommissionModule).toBeTruthy();
  });
});
