import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Asset';


class Lease extends Component {
    constructor(props){
        super(props);
        this.state = {
            leaseScreen:false,
            valuefromApp:''
        }

    }
   componentWillMount(){

    console.log(this.props);
    this.setState({valuefromApp:this.props.val})
   }
    componentWillReceiveProps ( nextProps ) {
        if(this.props === nextProps){
        console.log( '[UPDATE Lease.js] Inside componentWillReceiveProps', nextProps );
    }
    else{
        console.log("In else of WillReceiveProps",nextProps);
        this.setState({valuefromApp:nextProps.val});
    }
    }
    
   shouldComponentUpdate(nextProps,nextState){
       console.log(this.props,nextState);
       if(this.state.valuefromApp === nextProps.val){
           
           console.log("Not updating");
           return false;
       }
       else{
           return true;
       }
   }

render(){
    
    console.log(this.state.valuefromApp);
    return(
        <div className="table-responsive">
        <table style={{backgroundColor:"lightgrey"}}>
        <tbody>
        <tr>
            <td colSpan="4">
                <table style={{border:"solid 1px grey" ,width:"100%"}}>
                <tbody>
                    <tr>
                        <td colSpan="3"><center><u><a href=""> LEASE TERM : 39</a></u></center></td>
                    </tr>
                    <tr>
                        <td>LB: 12:16:2012</td>
                        <td></td>
                        <td>PED : 03/16/2016</td>
                    </tr>
                    <tr>
                        <td>ARR</td>
                        <td><div style={{width:"300px", height:"5px", backgroundColor:"blue"}}>&nbsp;</div></td>
                        <td>M</td>
                    </tr>
                    <tr>
                        <td>FD : 01/06/2013</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td colSpan="4">
                <table cellSpacing="5" width="100%">
                    <tbody>
                    <tr>
                        <td>#/$</td>
                        <td>Paid</td>
                        <td>Deliquent</td>
                        <td>Future</td>
                        <td>Lease Payment Rem</td>
                    </tr>
                    <tr>
                        <td>Firm Term</td>
                        <td>39/$6,834,5.16</td>
                        <td>0/$0.00</td>
                        <td>0/$0.00</td>
                        <td>0/$0.00</td>
                    </tr>
                    <tr>
                        <td>EOT</td>
                        <td>10/$1,471,310.87</td>
                        <td>0/$0.00</td>
                        <td>0/$0.00</td>
                        <td>0/$0.00</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
				<td colSpan="2">
					<table>
                        <tbody>
						<tr>
							<td><a href="">Deliquency</a></td>
							<td>15</td>
							<td>30</td>
							<td>60</td>
							<td>90</td>
						</tr>
						<tr>
							<td>History[]</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td colSpan="2">Status Code :</td>
							<td colSpan="2" align="right">2 - Active</td>
						</tr>
						<tr>
							<td colSpan="2">EG Indicator</td>
							<td colSpan="2" align="right">N</td>
						</tr>
						<tr>
							<td colSpan="2"><a href="">OEC</a></td>
							<td colSpan="2">$4,382,172.89</td>
						</tr>
						<tr>
							<td colSpan="2">Residual</td>
							<td colSpan="2">$1,455,000.33/33.2%</td>
						</tr>
                        </tbody>
					</table>
				</td>
				<td colSpan="2">
					<table style={{width:"100%", cellSpacing:"0", border: "solid 1px grey"}}>
                    <tbody>
						<tr>
							<td colSpan="4"><center>Open Payment Summary</center></td>
						</tr>
						<tr>
							<td style={{border:"solid 1px grey"}}>Description</td>
							<td style={{border:"solid 1px grey"}}>Past Amt</td>
							<td style={{border:"solid 1px grey"}}>Current A</td>
							<td style={{border:"solid 1px grey"}}>Total</td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td>GPO Amt :</td>
			<td>$0.00</td>
			<td>Orig Prod Type</td>
			<td>OPERLS - Operating Lease</td>
		</tr>
		<tr>
			<td>Total Residual</td>
			<td>$1,455,000.33</td>
			<td>Curr Prod Type</td>
			<td>ELTOOL - -Elto-off Lease</td>
		</tr>
		<tr>
			<td><a href="">Net Book Value:</a></td>
			<td>$1,266,524.69</td>
			<td>Sale</td>
			<td>Insaurance Ind: N</td>
		</tr>
		<tr>
			<td>Pay Media</td>
			<td>NONE</td>
			<td>Gain/Loss Amt:</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td><a href="">Current Payment</a></td>
			<td>US $867.58</td>
			<td>Credit</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Monthly Amort</td>
			<td>$127.03</td>
			<td>Gain/Loss Amt:</td>
			<td>Buyout Code :</td>
		</tr>
		<tr>
			<td>Security Deposit</td>
			<td>$0.00</td>
			<td>EG Income : &nbsp;&nbsp;&nbsp;$0.00</td>
			<td>Pre Tax Yld: &nbsp; 4.32%</td>
		</tr>
		<tr>
			<td>Useful Life(Mo):</td>
			<td>198</td>
			<td>Dispo Date: &nbsp;&nbsp;&nbsp;07/17/2015</td>
			<td>Realization: &nbsp;132.79</td>
		</tr>
		<tr>
			<td>Useful Lif(%Rem)</td>
			<td>70.00%</td>
			<td>Term. Code: E-Early</td>
			<td>Asset Status:</td>
		</tr>
		<tr>
			<td>Rem Burn Month</td>
			<td>&nbsp;</td>
			<td>Disp. Code:&nbsp;&nbsp;&nbsp; S - Sale</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Previous Account#</td>
			<td>8756528001</td>
			<td>IDMS Region: &nbsp; PA</td>
			<td>Next Due Date</td>
		</tr>
		<tr>
			<td>Mkt Plan Code:</td>
			<td>EBO</td>
			<td>Letter of Intent Date:</td>
			<td>CC/CD</td>
		</tr>
		<tr>
			<td>Auto Renew Type/Months:</td>
			<td>&nbsp;</td>
			<td>Recourse Code : None Recourse</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Original Finance Chg</td>
			<td>$0.00</td>
			<td>Prot Type</td>
			<td>Term Date : 07/17/2015</td>
		</tr>	
        </tbody>				
            </table>

            </div>
    )
}

}

export default Lease;