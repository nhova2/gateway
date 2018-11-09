import { StatistiqueMuserModule } from "./muser-statistique.module";



describe('StatistiqueModule', () => {
  let statistiqueModule: StatistiqueMuserModule;

  beforeEach(() => {
    statistiqueModule = new StatistiqueMuserModule();
  });

  it('should create an instance', () => {
    expect(statistiqueModule).toBeTruthy();
  });
});
