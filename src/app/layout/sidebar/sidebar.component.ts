import { Component, OnInit } from '@angular/core';
import { Config, Menu } from '../menu/types';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Account',
      iconClass: 'fa fa-book',
      active: true,
      submenu: [
        { name: 'Account', url: 'account' },
        { name: 'Address', url: 'account/address' },
        { name: 'Balance', url: 'account/balance' },
      ],
    },
    {
      name: 'Wallet',
      iconClass: 'fa fa-wallet',
      active: false,
      submenu: [
        { name: 'Account', url: 'wallet' },
        { name: 'Address', url: 'wallet/address' },
        { name: 'Balance', url: 'wallet/balance' },
      ],
    },
    {
      name: 'Contract',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Contract', url: 'contract' },
        { name: 'Deploy', url: 'deploy' },
      ],
    },
    {
      name: 'Config',
      iconClass: 'fa fa-tools',
      active: false,
      submenu: [{ name: 'Config', url: 'config' }],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
