import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ChartService } from '../shared/chart/chart.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'project-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  navigation = [
    {
      icon: 'home',
      label: 'Home',
      route: '/',
      badge: 10,
    },
    {
      icon: 'chat',
      label: 'Mensagens',
      route: '/mensagens',
      badge: 10,
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

  constructor(
    readonly chartService: ChartService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    setTimeout(() => {
      this.chartService.setPieChartValue(28)
    }, 3000);  
   
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}


