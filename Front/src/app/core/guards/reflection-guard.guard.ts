import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReflectionService } from '../../features/reflections/services/relection.service';

export const reflectionGuardGuard: CanActivateFn = (route, state) => {

  const reflectionService = inject(ReflectionService)
  const router = inject(Router)

  if (reflectionService.getAccessCount() > 20) {
    return true;
  } else {
    router.navigate(['/consigna']);
    return false;
  }
};
