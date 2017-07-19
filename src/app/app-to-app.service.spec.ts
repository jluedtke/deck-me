import { TestBed, inject } from '@angular/core/testing';

import { AppToAppService } from './app-to-app.service';

describe('AppToAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppToAppService]
    });
  });

  it('should ...', inject([AppToAppService], (service: AppToAppService) => {
    expect(service).toBeTruthy();
  }));
});
