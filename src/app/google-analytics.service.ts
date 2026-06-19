import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private trackingId: string = 'AW-18241251753'; // ID configurado no index.html

  constructor() {}

  trackPageView(url: string): void {
    // Verifica se o gtag está disponível
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', this.trackingId, {
        page_path: url
      });
    }
  }

  setTrackingId(trackingId: string): void {
    this.trackingId = trackingId;
  }

  trackEvent(eventName: string, eventParams?: Record<string, any>): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams);
    }
  }
}
