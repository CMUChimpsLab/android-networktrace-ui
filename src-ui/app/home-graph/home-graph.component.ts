import { Component, OnInit } from "@angular/core";
import "leader-line";
declare let LeaderLine: any;

@Component({
  selector: "app-home-graph",
  templateUrl: "./home-graph.component.html",
  styleUrls: ["./home-graph.component.scss"]
})
export class HomeGraphComponent implements OnInit {
  constructor() {}

  addLine(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    var line = new LeaderLine(v1, v2, { color: "#eaeaea", size: 2 });
  }

  ngOnInit() {
    const pairs_left = [
      ["app-twitter", "app-data-1"],
      ["app-twitter", "app-data-11"],
      ["app-fb", "app-data-2"],
      ["app-fb", "app-data-3"],
      ["app-google", "app-data-5"],
      ["app-google", "app-data-6"],
      ["app-google", "app-data-7"],
      ["app-google", "app-data-8"],
      ["app-youtube", "app-data-9"],
      ["app-youtube", "app-data-10"],
      ["app-tiktok", "app-data-12"],
      ["app-tiktok", "app-data-13"],
      ["app-tiktok", "app-data-4"],
      ["app-data-1", "cs-twitter"],
      ["app-data-2", "cs-fb"],
      ["app-data-3", "cs-fb"],
      ["app-data-4", "cs-fb"],
      ["app-data-5", "cs-google"],
      ["app-data-6", "cs-google"],
      ["app-data-7", "cs-google"],
      ["app-data-8", "cs-google"],
      ["app-data-9", "cs-google"],
      ["app-data-10", "cs-google"],
      ["app-data-11", "cs-tps"],
      ["app-data-12", "cs-unknown"],
      ["app-data-13", "cs-unknown"]
    ];
    pairs_left.forEach(pair => {
      this.addLine(pair[0], pair[1]);
    });
  }
}
