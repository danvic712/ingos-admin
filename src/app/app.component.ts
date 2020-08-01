import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // 是否折叠菜单
  public isCollapsed = false;

  // 是否显示账户信息的下拉菜单
  public showAvatarMenu: boolean;

  /**
   * 控制账户下拉菜单显示
   * @param display 是否显示下拉菜单
   */
  controlAvatarMenu(display: boolean) {
    this.showAvatarMenu = display;
  }
}
