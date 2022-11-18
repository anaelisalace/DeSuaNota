import { RouterModule } from '@angular/router';

export const AppRouting = RouterModule.forRoot([
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'mensagens',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'notificacoes',
    loadChildren: () =>
      import('./notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
  },
  {
    path: 'estatisticas',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  {
    path: 'comunidade',
    loadChildren: () =>
      import('./community/community.module').then((m) => m.CommunityModule),
  },
  {
    path: 'configuracoes',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
]);
