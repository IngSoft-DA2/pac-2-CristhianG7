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
    console.log(this.accessCount);
    return ++this.accessCount;
  }

  getAccessCount(): number {
    return this.accessCount;
  }
  
  getImporters(): Observable<string[]> {
    const params = new HttpParams();

    return this.httpClient.get<string[]>(`${this.apiUrl}/api/reflection/importers`, { params });
  }

  mapPoster(importer: Importers): Importers {
      return { name: importer.name };
  }
}
