import React , {Component} from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component{

    constructor(props){
        super(props);
        this.node = React.createRef();
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

     createBarChart = () => {
         console.log("Hello",this.node.current);
         select(this.node.current)
         .selectAll('rect')
         .enter()
         .append('rect');
         console.log(this.props.data);

     }

     render() {
        return <svg ref={this.node}
        width={500} height={500}>
        </svg>
     }


}

export default BarChart;