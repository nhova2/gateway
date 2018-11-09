import { GestionMuserModule } from "./gestion.module";



describe('gestionModule', () => {
  let gestionModule: GestionMuserModule;

  beforeEach(() => {
    gestionModule = new GestionMuserModule();
  });

  it('should create an instance', () => {
    expect(gestionModule).toBeTruthy();
  });
});
