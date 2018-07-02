import React , {Component} from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component{

    constructor(props){
        this.state = {

        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        log("getDerivedStateFromProps from Child");
        log(nextProps);
        log(prevState);
        return null;
   }
 
    componentDidMount() {
        this.createBarChart()
     }
     componentDidUpdate() {
        this.createBarChart()
     }

     createBarChart = () => {

     }

     render() {
        return <svg ref={node => this.node = node}
        width={500} height={500}>
        </svg>
     }


}

export default BarChart;