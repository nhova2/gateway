import { AlertesMultiuserModule } from './multiuser-alertes.module';

describe('AlertesMultiuserModule', () => {
  let alertesMuserModule: AlertesMultiuserModule;

  beforeEach(() => {
    alertesMuserModule = new AlertesMultiuserModule();
  });

  it('should create an instance', () => {
    expect(alertesMuserModule).toBeTruthy();
  });
});
