// EchoFindingsTable.jsx
import React from 'react';
import './EchoFindingsTable.css'; // Optional: Create a CSS file for styling

const EchoFindingsTable = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">Echo Findings Summary</h2>
      <table className="findings-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IVS (Diastole) 6-11 (mm) </td>
            <td><input type="text" className="value-input" /></td>
            <td>IVS (Systole) 8-20 (mm) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>LVPWT (Diastole) 6-11 (mm) </td>
            <td><input type="text" className="value-input" /></td>
            <td>LVPWT (Systole) 8-20 (mm) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>LVEF (%) </td>
            <td><input type="text" className="value-input" /></td>
            <td>LVFS (%) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>Mitral EPSS (mm)</td>
            <td><input type="text" className="value-input" /></td>
            <td>Mitral EF Slope (70-150 mm/sec) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>Mitral DE Excursion (mm) </td>
            <td><input type="text" className="value-input" /></td>
            <td>Aortic Root 22-37 (mm) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>RVID (Diastole) 7-23 (mm) </td>
            <td><input type="text" className="value-input" /></td>
            <td>Left Atrium Length 19-40 (mm) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>TAPSE (mm) </td>
            <td><input type="text" className="value-input" /></td>
            <td>LA/AO (mm) </td>
            <td><input type="text" className="value-input" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EchoFindingsTable;
