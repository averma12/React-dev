import React , {Component} from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component{
 
    componentDidMount() {
        this.createBarChart()
     }
     componentDidUpdate() {
        this.createBarChart()
     }

     createBarChart = () => {
         
     }


}