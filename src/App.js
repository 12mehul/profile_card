import "./App.css";
import CardComponent from "./components/CardComponent";
import cardData from "./data/data.json"; 
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);

  async function handleData(e) {
    //e.preventDefault();
    const resp = await axios.get("https://api.github.com/users")
    
    setAllData(resp.data);
     console.log(resp.data);
    
  }

  useEffect(() => { handleData(); }, []);

  return (
    <div className="App">
        {allData.map((profile, key) =>(
          <div key={key}>
            <CardComponent name={profile.login} image={profile.avatar_url} />
        </div>
      ))};
     </div>
  );
}

export default App;