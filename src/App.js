import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
//  Moj cod

const url = "https://course-api.com/react-tours-project";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const removeTour = (id) => {
    const newTours = data.filter((x) => x.id !== id);
    setData(newTours);
  };

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoad(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return (
      <main>
        <section>
          <Loading />
        </section>
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main>
        <section>
          <div className='title'>
            <h2>No more tours</h2>
            <button className='btn' onClick={() => getData()}>
              Refresh list
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>

        <Tours data={data} removeTour={removeTour} />
      </section>
    </main>
  );
}

export default App;
