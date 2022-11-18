import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  navigation = [
    {
      icon: 'home',
      label: 'Home',
      route: '/',
      badge: 0,
    },
    {
      icon: 'chat',
      label: 'Mensagens',
      route: '/mensagens',
      badge: 48,
    },
    {
      icon: 'notifications_active',
      label: 'Notificações',
      route: '/notificacoes',
      badge: 0,
    },
    {
      icon: 'bar_chart',
      label: 'Estatísticas',
      route: '/estatisticas',
      badge: 0,
    },
    {
      icon: 'group',
      label: 'Comunidade',
      route: '/comunidade',
      badge: 0,
    },
    {
      icon: 'build',
      label: 'Configurações',
      route: '/configuracoes',
      badge: 0,
    },
    {
      icon: 'logout',
      label: 'Sair',
      route: '/logout',
      badge: 0,
    },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
