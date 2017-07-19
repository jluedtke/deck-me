import { TestBed, inject } from '@angular/core/testing';

import { FirebaseToAppService } from './firebase-to-app.service';

describe('FirebaseToAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseToAppService]
    });
  });

  it('should ...', inject([FirebaseToAppService], (service: FirebaseToAppService) => {
    expect(service).toBeTruthy();
  }));
});
