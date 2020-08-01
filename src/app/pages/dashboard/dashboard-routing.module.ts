import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';

// 定义路由规则
const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard/analysis',
  pathMatch: 'full'
}, {
  path: 'analysis',
  component: AnalysisComponent
}, {
  path: 'monitor',
  component: MonitorComponent
}, {
  path: 'workplace',
  component: WorkplaceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
