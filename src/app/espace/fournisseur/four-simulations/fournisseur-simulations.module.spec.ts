import { SimulationsFournisseurModule } from "./fournisseur-simulations.module";


describe('SimulationsFournisseurModule', () => {
  let simulationsFournissModule: SimulationsFournisseurModule;

  beforeEach(() => {
    simulationsFournissModule = new SimulationsFournisseurModule();
  });

  it('should create an instance', () => {
    expect(simulationsFournissModule).toBeTruthy();
  });
});
