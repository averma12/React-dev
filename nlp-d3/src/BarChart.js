import React , {Component} from 'react';
import { scaleLinear,append, } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';


class BarChart extends Component{

    constructor(props){
        super(props);
        this.node = React.createRef();
        this.state = {
             size:{
                 width:0,
                 height:0
             }
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps from Child");
        console.log(nextProps);
       
        console.log(prevState);
        return {size: {
            width: nextProps.size[0],
            height: nextProps.size[1]
        }};
   }
 
    

    componentDidMount() {
        this.createBarChart()
     }
     componentDidUpdate() {
        this.createBarChart()
     }

     createBarChart = () => {
         console.log("Hello",this.node.current);
         const barPadding = 5;
         const barWidth = (this.state.size.width/this.props.data.length);
         console.log(barWidth);
         
         console.log(this.props.data);
         const dataMax = max(this.props.data)
         const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.state.size.height]);


            select(this.node.current)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
         
         select(this.node.current)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

            select(this.node.current)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25);
         

     }

     render() {
        return (
        
        <svg ref={this.node}
        width={this.state.size.width} height={this.state.size.height}>
        </svg>
        )
     }


}

export default BarChart;
function newFunction_1(nextProps) {
    BarChart.newFunction(nextProps);
}
