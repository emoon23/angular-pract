import { Component } from "@angular/core";

import { cars } from "../tester";

@Component({
  selector: "app-test-page",
  templateUrl: "./test-page.component.html",
  styleUrls: ["./test-page.component.css"],
})
export class ProductListComponent {
  cars = [...cars];

  share() {
    window.alert("This car has been shared!");
  }
}
