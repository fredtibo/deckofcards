import { YourGameModule } from './your-game.module';

describe('YourGameModule', () => {
  let yourGameModule: YourGameModule;

  beforeEach(() => {
    yourGameModule = new YourGameModule();
  });

  it('should create an instance', () => {
    expect(yourGameModule).toBeTruthy();
  });
});
