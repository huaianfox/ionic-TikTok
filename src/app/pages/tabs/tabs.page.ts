import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabIndex: string;
  constructor() {}

  handleSelect({ tab }) {
    this.tabIndex = tab;
  }
}
