// import React, { useState } from 'react';
// import './EchoFindingsForm.css';

// const EchoFindingsForm = () => {
//   const [showMitralDetails, setShowMitralDetails] = useState(false);
//   const [showTricuspidDetails, setShowTricuspidDetails] = useState(false);
//   const [showPulmonaryDetails, setShowPulmonaryDetails] = useState(false);
//   const [showAorticDetails, setShowAorticDetails] = useState(false);
//   const [showChamberDetails, setShowChamberDetails] = useState(false);
//   const [showWallThicknessDetails, setShowWallThicknessDetails] = useState(false);
//   const [showIasIvsDetails, setShowIasIvsDetails] = useState(false);
//   const [showIvcDetails, setShowIvcDetails] = useState(false);
//   const [showPericardiumDetails, setShowPericardiumDetails] = useState(false);

//   const toggleMitralDetails = () => {
//     setShowMitralDetails(!showMitralDetails);
//   };

//   const toggleTricuspidDetails = () => {
//     setShowTricuspidDetails(!showTricuspidDetails);
//   };

//   const togglePulmonaryDetails = () => {
//     setShowPulmonaryDetails(!showPulmonaryDetails);
//   };

//   const toggleAorticDetails = () => {
//     setShowAorticDetails(!showAorticDetails);
//   };

//   const toggleChamberDetails = () => {
//     setShowChamberDetails(!showChamberDetails);
//   };

//   const toggleWallThicknessDetails = () => {
//     setShowWallThicknessDetails(!showWallThicknessDetails);
//   };

//   const toggleIasIvsDetails = () => {
//     setShowIasIvsDetails(!showIasIvsDetails);
//   };

//   const toggleIvcDetails = () => {
//     setShowIvcDetails(!showIvcDetails);
//   };

//   const togglePericardiumDetails = () => {
//     setShowPericardiumDetails(!showPericardiumDetails);
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">2D Echo Findings</h2>
//       <form className="echo-findings-form">
//         <div className="form-group">
//           <label htmlFor="mitralValve">Mitral Valve:</label>
//           <button type="button" onClick={toggleMitralDetails} className="toggle-button">
//             {showMitralDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showMitralDetails && (
//           <div className="mitral-details">
//             <div className="form-group">
//               <label htmlFor="aml">AML:</label>
//               <select id="aml">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="thickened">Thickened</option>
//                 <option value="calcified">Calcified</option>
//                 <option value="prolapsed">Prolapsed</option>
//                 <option value="fixed">Fixed</option>
//                 <option value="paradoxical">Paradoxical Motion</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="pml">PML:</label>
//               <select id="pml">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="thickened">Thickened</option>
//                 <option value="calcified">Calcified</option>
//                 <option value="prolapsed">Prolapsed</option>
//                 <option value="fixed">Fixed</option>
//                 <option value="paradoxical">Paradoxical Motion</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="tricuspidValve">Tricuspid Valve:</label>
//           <button type="button" onClick={toggleTricuspidDetails} className="toggle-button">
//             {showTricuspidDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showTricuspidDetails && (
//           <div className="tricuspid-details">
//             <div className="form-group">
//               <label htmlFor="tricuspid">Tricuspid Valve:</label>
//               <select id="tricuspid">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="thickened">Thickened</option>
//                 <option value="calcified">Calcified</option>
//                 <option value="atresia">Atresia</option>
//                 <option value="vegetation">Vegetation</option>
//                 <option value="prolapsed">Prolapsed</option>
//                 <option value="doming">Doming</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="tricuspidStenosis">Tricuspid Stenosis:</label>
//               <select id="tricuspidStenosis">
//                 <option value="">Select an option</option>
//                 <option value="absent">Absent</option>
//                 <option value="present">Present</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="pulmonaryValve">Pulmonary Valve:</label>
//           <button type="button" onClick={togglePulmonaryDetails} className="toggle-button">
//             {showPulmonaryDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showPulmonaryDetails && (
//           <div className="pulmonary-details">
//             <div className="form-group">
//               <label htmlFor="pulmonary">Pulmonary Valve:</label>
//               <select id="pulmonary">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="thickened">Thickened</option>
//                 <option value="calcified">Calcified</option>
//                 <option value="atresia">Atresia</option>
//                 <option value="vegetation">Vegetation</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="pulmonaryStenosis">Pulmonary Stenosis:</label>
//               <select id="pulmonaryStenosis">
//                 <option value="">Select an option</option>
//                 <option value="absent">Absent</option>
//                 <option value="present">Present</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="aorticValve">Aortic Valve:</label>
//           <button type="button" onClick={toggleAorticDetails} className="toggle-button">
//             {showAorticDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showAorticDetails && (
//           <div className="aortic-details">
//             <div className="form-group">
//               <label htmlFor="aortic">Aortic Valve:</label>
//               <select id="aortic">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="thickened">Thickened</option>
//                 <option value="calcified">Calcified</option>
//                 <option value="flutter">Flutter</option>
//                 <option value="vegetation">Vegetation</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="aorticStenosis">Aortic Stenosis:</label>
//               <select id="aorticStenosis">
//                 <option value="">Select an option</option>
//                 <option value="absent">Absent</option>
//                 <option value="present">Present</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="chambers">Chambers:</label>
//           <button type="button" onClick={toggleChamberDetails} className="toggle-button">
//             {showChamberDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showChamberDetails && (
//           <div className="chamber-details">
//             <div className="form-group">
//               <label htmlFor="leftAtrium">Left Atrium:</label>
//               <select id="leftAtrium">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="enlarged">Enlarged</option>
//                 <option value="thickened">Thickened</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="leftVentricle">Left Ventricle:</label>
//               <select id="leftVentricle">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="enlarged">Enlarged</option>
//                 <option value="thickened">Thickened</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="rightAtrium">Right Atrium:</label>
//               <select id="rightAtrium">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="enlarged">Enlarged</option>
//                 <option value="thickened">Thickened</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="rightVentricle">Right Ventricle:</label>
//               <select id="rightVentricle">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="enlarged">Enlarged</option>
//                 <option value="thickened">Thickened</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="cardiacWallThickness">Cardiac Wall Thickness:</label>
//           <button type="button" onClick={toggleWallThicknessDetails} className="toggle-button">
//             {showWallThicknessDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showWallThicknessDetails && (
//           <div className="wall-thickness-details">
//             <div className="form-group">
//               <label htmlFor="wallThickness">Wall Thickness:</label>
//               <select id="wallThickness">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="hypertrophy">Hypertrophy</option>
//                 <option value="scarred">Scarred</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="iasIvs">IAS/IVS:</label>
//           <button type="button" onClick={toggleIasIvsDetails} className="toggle-button">
//             {showIasIvsDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showIasIvsDetails && (
//           <div className="ias-ivs-details">
//             <div className="form-group">
//               <label htmlFor="iasIvsCondition">IAS/IVS Condition:</label>
//               <select id="iasIvsCondition">
//                 <option value="">Select an option</option>
//                 <option value="intact">Intact</option>
//                 <option value="non-intact">Non-Intact</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="ivc">IVC:</label>
//           <button type="button" onClick={toggleIvcDetails} className="toggle-button">
//             {showIvcDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showIvcDetails && (
//           <div className="ivc-details">
//             <div className="form-group">
//               <label htmlFor="ivcSize">IVC Size:</label>
//               <input type="text" id="ivcSize" placeholder="Enter IVC size" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="ivcCollapsibility">IVC Collapsibility with Inspiration:</label>
//               <input type="text" id="ivcCollapsibility" placeholder="Enter IVC collapsibility" />
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="pericardium">Pericardium:</label>
//           <button type="button" onClick={togglePericardiumDetails} className="toggle-button">
//             {showPericardiumDetails ? 'Hide Details' : 'Show Details'}
//           </button>
//         </div>
//         {showPericardiumDetails && (
//           <div className="pericardium-details">
//             <div className="form-group">
//               <label htmlFor="pericardiumCondition">Pericardium Condition:</label>
//               <select id="pericardiumCondition">
//                 <option value="">Select an option</option>
//                 <option value="normal">Normal</option>
//                 <option value="thickened">Thickened</option>
//                 <option value="calcified">Calcified</option>
//               </select>
//             </div>
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="effusion">Effusion:</label>
//           <select id="effusion">
//             <option value="">Select an option</option>
//             <option value="absent">Absent</option>
//             <option value="mild">Mild</option>
//             <option value="moderate">Moderate</option>
//             <option value="severe">Severe</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="tamponade">Tamponade:</label>
//           <select id="tamponade">
//             <option value="">Select an option</option>
//             <option value="absent">Absent</option>
//             <option value="present">Present</option>
//           </select>
//         </div>
//         <div className="form-group">
//         </div>
//         <div className="form-group">
//           <label htmlFor="chamberSize">Chamber Size:</label>
//           <input type="text" id="chamberSize" placeholder="Enter chamber size" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="wallMotion">Wall Motion:</label>
//           <input type="text" id="wallMotion" placeholder="Enter wall motion" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="valveFunction">Valve Function:</label>
//           <input type="text" id="valveFunction" placeholder="Enter valve function" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="ejectionFraction">Ejection Fraction:</label>
//           <input type="number" id="ejectionFraction" placeholder="Enter ejection fraction" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="findings">Findings:</label>
//           <textarea id="findings" rows="4" placeholder="Enter additional findings"></textarea>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EchoFindingsForm;



import React from 'react';
import './EchoFindingsForm.css';

const EchoFindingsForm = () => {
  const printPage = () => {
    window.print();
  };
  return (
    <div className="form-container">
      <h2 className="form-title">2D Echo Findings</h2>
      <button id="printButton" onClick={printPage}>Print</button>
      <form className="echo-findings-form">
        <div className="form-group">
          <label htmlFor="mitralValve">Mitral Valve:</label>
          <select id="mitralValve">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="thickened">Thickened</option>
            <option value="calcified">Calcified</option>
            <option value="prolapsed">Prolapsed</option>
            <option value="fixed">Fixed</option>
            <option value="paradoxical">Paradoxical Motion</option>
          </select>
        </div>
        <div className="mitral-details">
          <div className="form-group">
            <label htmlFor="aml">AML:</label>
            <select id="aml">
              <option value="">Select an option</option>
              <option value="normal">Normal</option>
              <option value="thickened">Thickened</option>
              <option value="calcified">Calcified</option>
              <option value="prolapsed">Prolapsed</option>
              <option value="fixed">Fixed</option>
              <option value="paradoxical">Paradoxical Motion</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pml">PML:</label>
            <select id="pml">
              <option value="">Select an option</option>
              <option value="normal">Normal</option>
              <option value="thickened">Thickened</option>
              <option value="calcified">Calcified</option>
              <option value="prolapsed">Prolapsed</option>
              <option value="fixed">Fixed</option>
              <option value="paradoxical">Paradoxical Motion</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tricuspidValve">Tricuspid Valve:</label>
          <select id="tricuspidValve">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="thickened">Thickened</option>
            <option value="calcified">Calcified</option>
            <option value="atresia">Atresia</option>
            <option value="vegetation">Vegetation</option>
            <option value="prolapsed">Prolapsed</option>
            <option value="doming">Doming</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pulmonaryValve">Pulmonary Valve:</label>
          <select id="pulmonaryValve">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="thickened">Thickened</option>
            <option value="calcified">Calcified</option>
            <option value="atresia">Atresia</option>
            <option value="vegetation">Vegetation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="aorticValve">Aortic Valve:</label>
          <select id="aorticValve">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="thickened">Thickened</option>
            <option value="calcified">Calcified</option>
            <option value="flutter">Flutter</option>
            <option value="vegetation">Vegetation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="chambers">Chambers:</label>
          <select id="chambers">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="enlarged">Enlarged</option>
            <option value="thickened">Thickened</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cardiacWallThickness">Cardiac Wall Thickness:</label>
          <select id="wallThickness">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="hypertrophy">Hypertrophy</option>
            <option value="scarred">Scarred</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="iasIvs">IAS/IVS:</label>
          <select id="iasIvsCondition">
            <option value="">Select an option</option>
            <option value="intact">Intact</option>
            <option value="non-intact">Non-Intact</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ivc">IVC:</label>
          <div className="ivc-details">
            <label htmlFor="ivcSize">IVC Size:</label>
            <input type="text" id="ivcSize" placeholder="Enter IVC size" />
            <label htmlFor="ivcCollapsibility">IVC Collapsibility:</label>
            <input type="text" id="ivcCollapsibility" placeholder="Enter IVC collapsibility" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pericardium">Pericardium:</label>
          <select id="pericardiumCondition">
            <option value="">Select an option</option>
            <option value="normal">Normal</option>
            <option value="thickened">Thickened</option>
            <option value="calcified">Calcified</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="effusion">Effusion:</label>
          <select id="effusion">
            <option value="">Select an option</option>
            <option value="absent">Absent</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tamponade">Tamponade:</label>
          <select id="tamponade">
            <option value="">Select an option</option>
            <option value="absent">Absent</option>
            <option value="present">Present</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="chamberSize">Chamber Size:</label>
          <input type="text" id="chamberSize" placeholder="Enter chamber size" />
        </div>

        <div className="form-group">
          <label htmlFor="wallMotion">Wall Motion:</label>
          <input type="text" id="wallMotion" placeholder="Enter wall motion" />
        </div>

        <div className="form-group">
          <label htmlFor="valveFunction">Valve Function:</label>
          <input type="text" id="valveFunction" placeholder="Enter valve function" />
        </div>

        <div className="form-group">
          <label htmlFor="ejectionFraction">Ejection Fraction:</label>
          <input type="number" id="ejectionFraction" placeholder="Enter ejection fraction" />
        </div>

        <div className="form-group">
          <label htmlFor="findings">Findings:</label>
          <textarea id="findings" rows="4" placeholder="Enter additional findings"></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EchoFindingsForm;
