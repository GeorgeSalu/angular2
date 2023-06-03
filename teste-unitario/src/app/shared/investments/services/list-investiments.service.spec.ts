import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListInvestimentsService } from './list-investiments.service';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../model/investiments';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const url = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";

  const mockList: Array<Investiments> = [
    {
      name: 'banco 1',
      value: 100
    },
    {
      name: 'banco 2',
      value: 100
    },
    {
      name: 'banco 3',
      value: 100
    },
    {
      name: 'banco 4',
      value: 100
    },
    {
      name: 'banco 5',
      value: 100
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should be list all investments', (done) => {
    service.list().subscribe((res: Array<Investiments>) => {
        expect(res[0].name).toEqual('banco 1');
        expect(res[0].value).toEqual(100);
        done();
      });

      const req = httpTestingController.expectOne(url);
      req.flush(mockList);

      expect(req.request.method).toEqual('GET');
  });

});
