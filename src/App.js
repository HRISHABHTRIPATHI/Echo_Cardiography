import "./App.css";
import DopplersFindings from "./component/DopplersFindings";
import EchoFindingsForm from "./component/EchoFindingsForm";
import EchoFindingsTable from "./component/EchoFindingsTable";
import Homepage from "./component/Homepage";
import image from "./image.png"; // Adjust the name if necessary

function App() {
  return (
    <div>
      <Homepage />
      <EchoFindingsForm />
      <img src={image} alt="Description of the image" className="my-image" />
      <EchoFindingsTable />
      <DopplersFindings />
    </div>
  );
}

export default App;
