import { Component, signal } from '@angular/core';
import { Importers } from '../models/importers.models';
import { inject } from '@angular/core';
import { ReflectionService } from '../services/relection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reflection',
  imports: [CommonModule],
  templateUrl: './reflection.component.html',
  styleUrl: './reflection.component.css'
})
export class ReflectionComponent {

  private reflectionService = inject(ReflectionService);

  importers = signal<Importers[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  loadImporters(): void 
  {
    this.loading.set(true);
    this.error.set(null);

    this.reflectionService.getImporters().subscribe({
      next: (response) => {
        const mapped = response.map((j) => this.reflectionService.mapPoster(j));
        this.importers.set(mapped);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load importers. Please try again later.');
        this.loading.set(false);
        console.log("Failed to retrieve data");
      }
    }); 
  }
}
