import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SearchResults = (props) => {




    return(
    <div className="cont">
               
    <table className="table" cellSpacing="0" style={{display:'block'}}>
      
      <tbody>
        <tr>
          <td colSpan="2">WELLS FARGO EQUIPMENT FINANCE</td>
          <td>Tax Code</td>
          <td>&nbsp;</td>
          <td>Wal-Mart Transportation llc</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Pf1/Rmkt Owner</td>
          <td>Rohrman H</td>
          <td>PO type</td>
          <td>3 true-FMV</td>
          <td>Contact</td>
          <td>Gregory Marrella</td>
          <td><button value="WIP">WIP</button></td>
        </tr>
        <tr>
        <td>Collection desc</td>
        <td>Motorized Vehicles</td>
        <td>Ext Ref #</td>
        <td>&nbsp;</td>
        <td>Phone</td>
        <td>(123)-456-789</td>
        <td><button value="[]">[]</button></td>
        </tr>
        <tr>
        <td>Program/Asset Class</td>
        <td>CORE/BFS</td>
        <td>Location</td>
        <td>CIFWN</td>
        <td>Fax</td>
        <td>(123)-456-789</td>
        <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>)



}
export default SearchResults;