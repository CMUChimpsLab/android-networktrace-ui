import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
HighchartsSankey(Highcharts);

@Component({
  selector: "app-viz",
  templateUrl: "./viz.component.html",
  styleUrls: ["./viz.component.scss"]
})
export class VizComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    colors: [
      "#8085e9",
      "#7798BF",
      "#aaeeee",
      "#ff0066",
      "#eeaaee",
      "#7798BF",
      "#aaeeee"
    ],

    chart: {
      backgroundColor: null,
      style: {
        fontFamily: "Open Sans"
      }
    },

    title: {
      text: "Where does your data go? "
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          y: -6,
          color: "#000"
        }
      }
    },

    series: [
      {
        keys: ["from", "to", "weight"],
        data: [
          ["Twitter", "twitter.com", 1],
          ["Twitter", "crashlytics", 1],
          ["Facebook", "b-graph.facebook.com", 1],
          ["Facebook", "m.facebook.com", 1],
          ["Google", "accounts.google.com", 1],
          ["Google", "googleapis.com", 1],
          ["Google", "googleservices.com", 1],
          ["Google", "google.com", 1],
          ["Google", "googlemanager.com", 1],
          ["Google", "googleservices.com", 1],
          ["TicTok", "m.facebook.com", 1],
          ["TicTok", "crashlytics", 1],
          ["TicTok", "zhiliaoapp.com", 1],
          ["TicTok", "easemob.com", 1],
          ["twitter.com", "Twitter Cloud", 1],
          ["b-graph.facebook.com", "Facebook Cloud", 1],
          ["google.com", "Google Cloud", 1],
          ["accounts.google.com", "Google Cloud", 1],
          ["googlemanager.com", "Google Cloud", 1],
          ["googleservices.com", "Google Cloud", 1],
          ["crashlytics", "Third Party Library", 1],
          ["easemob.com", "Unknown", 1],
          ["zhiliaoapp.com", "Unknown", 1]
        ],
        type: "sankey",
        name: "Data collection viz"
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
