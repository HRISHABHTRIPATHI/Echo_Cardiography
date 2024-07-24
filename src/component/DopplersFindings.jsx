// DopplersFindings.jsx
import React from 'react';
import './DopplersFindings.css'; // Optional: Create a CSS file for styling

const DopplersFindings = () => {
  const printPage = () => {
    window.print();
  };
  return (
    <div className="table-container">
      <h2 className="table-title">Doppler Findings</h2>
      <table className="findings-table">
        <thead>
          <tr>
            <th>Valves</th>
            <th>Regurgitation</th>
            <th>Velocity (m/sec) Peak/Mean</th>
            <th>Peak GR (mmHg)</th>
            <th>Mean GR (mmHg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mitral Valve (MV)</td>
            <td>
              <select id="mv">
                <option value="">Select an option</option>
                <option value="absent">Absent</option>
                <option value="trivial">Trivial</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>Tricuspid Valve (TV)</td>
            <td>
              <select id="tv">
                <option value="">Select an option</option>
                <option value="absent">Absent</option>
                <option value="trivial">Trivial</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>Pulmonary Valve (PV)</td>
            <td>
              <select id="pv">
                <option value="">Select an option</option>
                <option value="absent">Absent</option>
                <option value="trivial">Trivial</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
          </tr>
          <tr>
            <td>Aortic Valve (AV)</td>
            <td>
              <select id="av">
                <option value="">Select an option</option>
                <option value="absent">Absent</option>
                <option value="trivial">Trivial</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
            <td><input type="text" className="value-input" /></td>
          </tr>
        </tbody>
      </table>
      <div className="form-group">
        <div className="inline-inputs">
          <div>
            <label htmlFor="rasp">RVSP/PASP (mmHg)</label>
            <input type="text" id="rasp" placeholder="" />
          </div>
          <div>
            <label htmlFor="arpht">AR PHT</label>
            <input type="text" id="arpht" placeholder="" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="inline-inputs">
          <div>
            <label htmlFor="ewave">E WAVE VELOCITY (m/sec)</label>
            <input type="text" id="ewave" placeholder="" />
          </div>
          <div>
            <label htmlFor="awave">A WAVE VELOCITY (m/sec)</label>
            <input type="text" id="awave" placeholder="" />
          </div>
          <div>
            <label htmlFor="ea">E/A RATIO</label>
            <input type="text" id="ea" placeholder="" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="inline-inputs">
          <div>
            <label htmlFor="ewave">E' WAVE VELOCITY (m/sec)</label>
            <input type="text" id="ewave" placeholder="" />
          </div>
          <div>
            <label htmlFor="awave">A' WAVE VELOCITY (m/sec)</label>
            <input type="text" id="awave" placeholder="" />
          </div>
          <div>
            <label htmlFor="ea">E/e' RATIO</label>
            <input type="text" id="ea" placeholder="" />
          </div>
        </div>
      </div>
      <div className="form-group">
          <label htmlFor="findings">Findings:</label>
          <textarea id="findings" rows="4" placeholder="Enter additional findings"></textarea>
      </div>
      <button type="submit" className="submit-button">Submit</button>
      <button id="printButton" onClick={printPage}>Print</button>
    </div>
  );
};

export default DopplersFindings;
