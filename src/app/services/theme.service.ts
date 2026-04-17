import { Injectable, signal, effect } from '@angular/core';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** When true, `data-bs-theme="dark"` is applied on `<html>`. */
  readonly isDark = signal(false);

  constructor() {
    this.isDark.set(this.readInitial());
    effect(() => {
      const dark = this.isDark();
      document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
      try {
        localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
      } catch {
        /* private mode / unavailable */
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', dark ? '#0f172a' : '#f4f6fb');
      }
    });
  }

  toggle(): void {
    this.isDark.update((v) => !v);
  }

  private readInitial(): boolean {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark') {
        return true;
      }
      if (saved === 'light') {
        return false;
      }
    } catch {
      /* ignore */
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }
}
