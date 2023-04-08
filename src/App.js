import logo from './logo.svg';
import './App.css';

const riteCleanIp = "rtl.migserver.ml";
const mciCleanIp = "mci.migserver.ml";
const mtnCleanIp = "mtn.migserver.ml";

function getIrancellConfig(id) {
  let config = `vless://${id}@${mtnCleanIp}:443?path=%2FCvBSNfgwWoylKKaW8OSvRYb7t&security=tls&encryption=none&alpn=http/1.1&host=cdn.migserver.ml&type=ws&sni=cdn.migserver.ml#migserver-mtn`;
  return config;

}
function getHamrahAvalCongig(id) {
  let config = `vless://${id}@${mciCleanIp}:443?path=%2FCvBSNfgwWoylKKaW8OSvRYb7t&security=tls&encryption=none&alpn=http/1.1&host=cdn.migserver.ml&type=ws&sni=cdn.migserver.ml#mci-migserver`;
  return config;
}
function getRitelCongig(id) {
  let config = `vless://${id}@${riteCleanIp}:443?path=%2FCvBSNfgwWoylKKaW8OSvRYb7t&security=tls&encryption=none&alpn=http/1.1&host=cdn.migserver.ml&type=ws&sni=cdn.migserver.ml#Ritel-migserver`
  return config;
}
function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  let mntConfig = "" + getIrancellConfig(id);
  let rtlConfig = "" + getRitelCongig(id);
  let mciConfig = "" + getHamrahAvalCongig(id);
  return (
    <div className="App">

      <div className='vpn-card-container'>

        <div className="card" style={{ width: "18rem" }} >
          <div className="card-body">
            <h5 className="card-title">Irancell {id}</h5>
            <p className="card-text">

              {mntConfig}

            </p>
            <button className='btn btn-outline-primary' onClick={() => CopyText(mntConfig)}
            >
              Copy config
            </button>
          </div>




        </div>
        <div className="card" style={{ width: "18rem" }} >
          <div className="card-body">
            <h5 className="card-title">Rightel</h5>

            <p className="card-text">

              {rtlConfig}
            </p>
            <button className='btn btn-outline-primary' onClick={() => CopyText(rtlConfig)}
            >
              Copy config
            </button>
          </div>





        </div>
        <div className="card" style={{ width: "18rem" }} >
          <div className="card-body">
            <h5 className="card-title">Hamrah Aval</h5>
            <p className="card-text">{mciConfig}</p>
            <button className='btn btn-outline-primary' onClick={() => CopyText(mciConfig)}
            >
              Copy config
            </button>
          </div>




        </div>



      </div>



      <div>

      </div>

      <button className='btn btn-outline-primary' onClick={() => CopyText(`${mciConfig}\n${rtlConfig}\n${mntConfig}`)}
      >
        Copy all Configs
      </button>
    </div>

  );
}

function CopyText(text){

  navigator.clipboard.writeText(text)
alert("config is copied")

}

export default App;
