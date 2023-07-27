import { useState } from "react";
import "./inputmading.css";
import axios from "axios";
import MadingAdmin from "./MadingAdmin";
import DataMading from "./DataMading";

const InputMading = ({ setHalaman }) => {
  const [dataInput, setDataInput] = useState({
    judul_mading: "",
    isi_mading: "",
  });

  const handleInput = (e) => {
    e.preventDefault();

    setDataInput((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const handleBatal = (e) => {
    e.preventDefault();
    setHalaman(<DataMading setHalaman={setHalaman} />);
    // window.location.reload()
  };

  const handleSimpan = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3069/mading`, dataInput);
    setHalaman(<DataMading setHalaman={setHalaman} />);
  };
  console.log(dataInput);
  return (
    <div className="input-mading container">
      <div className="judul-admin-sub">
        <p className="text-judul-admin d-flex align-items-center justify-content-center">
          Input Mading
        </p>
      </div>

      <div className="form-input-mading m-5 px-5">
        <div className="row">
          <div className="col-2 d-flex justify-content-start">
            <p className="text-mading-input">Judul Mading</p>
          </div>
          <div className="col d-flex justify-content-start">
            <input
              type="text"
              className="input-input-mading px-1"
              onChange={handleInput}
              id="judul_mading"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-2 d-flex justify-content-start ">
            <p className="text-mading-input">Isi Mading</p>
          </div>
          <div className="col d-flex justify-content-start">
            <textarea
              type="text"
              className="input-isi-mading px-1"
              onChange={handleInput}
              id="isi_mading"
            />
          </div>
        </div>
      </div>

      <div className="bg-but-input-mading row">
        <div className="col d-flex justify-content-end">
          <button
            className="but-input-admin btn btn-outline-danger"
            onClick={handleBatal}
          >
            Batal
          </button>
        </div>
        <div className="col d-flex justify-content-start">
          <button
            className="but-input-admin btn btn-primary"
            onClick={handleSimpan}
          >
            Input
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputMading;
