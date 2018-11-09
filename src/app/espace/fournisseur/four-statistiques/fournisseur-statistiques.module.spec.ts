import { StatistiquesFournisseurModule } from "./fournisseur-statistiques.module";


describe('StatistiquesFournisseurModule', () => {
  let statistiquesFournissModule: StatistiquesFournisseurModule;

  beforeEach(() => {
    statistiquesFournissModule = new StatistiquesFournisseurModule();
  });

  it('should create an instance', () => {
    expect(statistiquesFournissModule).toBeTruthy();
  });
});
