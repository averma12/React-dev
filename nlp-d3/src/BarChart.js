import React , {Component} from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps from Child");
        console.log(nextProps);
        console.log(prevState);
        return null;
   }
 
    componentDidMount() {
        this.createBarChart()
     }
     componentDidUpdate() {
        this.createBarChart()
     }

     createBarChart = (node) => {
         console.log(node);
         select(node);

     }

     render() {
        return <svg ref={node => this.node = node}
        width={500} height={500}>
        </svg>
     }


}

export default BarChart;