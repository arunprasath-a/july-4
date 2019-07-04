import React, { Component } from 'react';
import TestHOC from "../HOC/testHOC";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

class TestComp2 extends Component {

    componentDidUpdate() {

        var chart = am4core.create("Barchartdiv", am4charts.XYChart);
    
        chart.data = this.props.barchartData.data;
    
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
    
    
        //here 2 is chaged to 3
        categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
          if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
          }
          return dy;
        });
    
        //this line has been commented coz it has not been used 
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
    
        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
    
    
      }

    render() {
        const { BarChartComponent } = this.props;

        return this.props.BarChartComponent ? (
            <React.Fragment>

                < BarChartComponent/>
               
            </React.Fragment>
        ) : <div></div>
    }
}

export default (TestHOC(TestComp2));