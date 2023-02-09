import React from "react";
import Form from "./Components/form";
import Mensage from "./Components/mensage";
import axios from "axios";
import JData from "./data.json";

function App() {
  const [data, setData] = React.useState<IMensage[] | []>(JData);

  const handleAdd = React.useCallback(
    (item: IMensage) => {
      setData([...data, item]);

      saveJson([...data, item]).then(() => alert("Comentario Adicionado"));
    },
    [data]
  );

  const handleRemove = React.useCallback(
    (index: number) => {
      let newArr = [...data];

      delete newArr[index];
      newArr = newArr.filter((e) => e);

      setData(newArr);
      saveJson(newArr).then(() => alert("Removido"));
    },
    [data]
  );

  const saveJson = async (posts: IMensage[]) => {
    // api URL // end point from node server / express server

    const url = "http://localhost:5000/data";
    await axios.post(url, posts).then((response) => {
      // console.log(response);
    });
  };

  return (
    <div className="app">
      <Form handleAdd={handleAdd}/>
      {data && data.length > 0 && (
        <div>
          <span className="feed">Feed</span>

          <div>
            {data.map((item, index) => (
              <Mensage key={index} i={index} remove={handleRemove} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
