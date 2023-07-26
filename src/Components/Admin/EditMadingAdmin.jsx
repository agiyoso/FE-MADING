import axios from "axios";
import { useEffect, useState } from "react";
import DataMading from "./DataMading";

const EditMadingAdmin = ({ setHalaman, id }) => {
  const [dataMading, setDataMading] = useState({});
  const [dataInput, setDataInput] = useState({
    id_mading: "",
    judul_mading: "",
    isi_mading: "",
  });

  useEffect(() => {
    const getDataMading = async () => {
      const response = await axios.get(`http://localhost:3069/mading/${id}`);
      setDataMading(response.data);
    };
    getDataMading();
  }, []);

  useEffect(() => {
    setDataInput((data) => ({
      ...data,
      id_mading: id,
      judul_mading: dataMading.judul_mading,
      isi_mading: dataMading.isi_mading,
    }));
  }, [dataMading]);

  const handleInput = (e) => {
    e.preventDefault();
    setDataInput((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSimpan = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3069/mading`, dataInput);
    setHalaman(<DataMading setHalaman={setHalaman} />);
  };

  const handleBatal = (e) => {
    e.preventDefault();
    setHalaman(<DataMading setHalaman={setHalaman} />);
  };

  return (
    <div className="edit-mading-admin">
      <div className="judul-admin-sub">
        <p className="text-judul-admin d-flex align-items-center justify-content-center">
          Edit Mading
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
              value={dataInput.judul_mading}
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
              value={dataInput.isi_mading}
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
            Simpan Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMadingAdmin;
