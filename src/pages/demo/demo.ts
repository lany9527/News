/**
 * Created by littlestone on 2016/11/16.
 */
import {Component} from '@angular/core';
import {FabContainer} from "ionic-angular";

@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})

export class DemoPage {
  constructor() {
  }

  share(socialNet: string, fab: FabContainer) {
    // fab.close();
    console.log("Sharing in", socialNet);
  }
}