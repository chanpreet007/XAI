import { SetStateAction, useState } from "react";
import { QrReader } from 'react-qr-reader';
import "./QRCode.module.sass";
import { json } from "stream/consumers";
const App = () => {
  const [data, setData] = useState("No result");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);

  return (
    <div className="container">
    <div className="card">
      <h1 className="card-title">Scan QR Code</h1>
      <div className="card-content">
    <div >
      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <QrReader
            onResult={(
              result: { text: SetStateAction<string> },
              error: any
            ) => {
              if (!!result) {
                setData(JSON.parse(result));
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{JSON.stringify(data)}</p>}
    </div>
    </div>
      </div>
    </div>
  );
};

export default App;
