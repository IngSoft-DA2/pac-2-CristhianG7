import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReflectionService } from '../../../features/reflections/services/relection.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private reflectionService = inject(ReflectionService)

  incrementCount(): void{
    this.reflectionService.incrementAccessCount();
  }
}
