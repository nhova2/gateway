import { StatistiqueAnimModule } from "./anim-statistique.module";



describe('StatistiqueModule', () => {
  let statistiqueModule: StatistiqueAnimModule;

  beforeEach(() => {
    statistiqueModule = new StatistiqueAnimModule();
  });

  it('should create an instance', () => {
    expect(statistiqueModule).toBeTruthy();
  });
});
