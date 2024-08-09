import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from "@angular/platform-browser";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideServerRendering } from "@angular/platform-server";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { environment } from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true,
    })),
    provideHttpClient(withFetch()),
    provideServerRendering(),
    { provide: "BASE_API_URL", useValue: environment.BASE_API_URL },
    provideAnimationsAsync(),
  ],
};
