import { GestionAnimModule } from "./gestion.module";



describe('gestionModule', () => {
  let gestionModule: GestionAnimModule;

  beforeEach(() => {
    gestionModule = new GestionAnimModule();
  });

  it('should create an instance', () => {
    expect(gestionModule).toBeTruthy();
  });
});
