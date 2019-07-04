import React, { Component } from 'react';
import TestHOC from "../HOC/testHOC";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import { connect } from 'react-redux';

am4core.useTheme(am4themes_animated);

class TestComp extends Component {
   

    

    componentDidUpdate() {
       
        var chart = am4core.create("Pichartdiv", am4charts.PieChart);
        chart.data = this.props.pichartData.data;
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
    }

    render() { 
        const{PichartComponent}=this.props;
        
        return this.props.PichartComponent?( 
            <React.Fragment>
                
                <PichartComponent/>
                <h1>{this.props.swapPiCount}</h1>
                
                       
            </React.Fragment>
         ):<div></div>
    }
}
 
export default (TestHOC(TestComp));