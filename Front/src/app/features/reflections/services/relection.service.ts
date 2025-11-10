import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Importers } from '../models/importers.models';

@Injectable({
  providedIn: 'root'
})
export class ReflectionService {
  private apiUrl = 'http://localhost:5248';
  private httpClient = inject(HttpClient);

  private accessCount = 0;

  incrementAccessCount(): number {
    return this.accessCount++;
  }

  getAccessCount(): number {
    return this.accessCount;
  }
  
  getImporters(): Observable<Importers[]> {
    const params = new HttpParams();

    return this.httpClient.get<Importers[]>(`${this.apiUrl}/api/reflection/importers`, { params });
  }

  mapPoster(importer: Importers): Importers {
    return {
      ...importer
    };
  }
}
