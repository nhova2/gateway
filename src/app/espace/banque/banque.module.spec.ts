import { BanqueModule } from './banque.module';

describe('BanqueModule', () => {
  let banqueModule: BanqueModule;

  beforeEach(() => {
    banqueModule = new BanqueModule();
  });

  it('should create an instance', () => {
    expect(banqueModule).toBeTruthy();
  });
});
