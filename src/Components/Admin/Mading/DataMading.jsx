import { useEffect, useState } from "react";
import InputMading from "./InputMading";
import axios from "axios";
import EditMadingAdmin from "./EditMadingAdmin";

const DataMading = ({ setHalaman }) => {
  const [dataMading, setDataMading] = useState([]);

  useEffect(() => {
    const getMading = async () => {
      const response = await axios.get(`http://localhost:3069/mading`);
      setDataMading(response.data);
    };
    getMading();
  }, [dataMading]);

  const handleInputMading = () => {
    setHalaman(<InputMading setHalaman={setHalaman} />);
  };

  const handleEditMading = (e, id) => {
    e.preventDefault();
    setHalaman(<EditMadingAdmin setHalaman={setHalaman} id={id} />);
  };

  const handleHapus = (e, id) => {
    e.preventDefault();
    console.log(id);

    axios.delete(`http://localhost:3069/mading/${id}`);
    const dataFilter = dataMading.filter((data) => data.id_mading !== id);
    setDataMading(dataFilter);
  };
  return (
    <div className="data-mading">
      <div className="input-mading d-flex justify-content-start my-2">
        <button className="but-input-mading" onClick={handleInputMading}>
          Input Mading
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr className="">
            <th className="col-1">No</th>
            <th className="col-3">Judul</th>
            <th className="col">Isi</th>
            <th className="col">Komentar</th>
            <th className="col-2">~</th>
          </tr>
        </thead>
        <tbody>
          {dataMading?.map((data, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data.judul_mading}</td>
                <td>{data.isi_mading}</td>
                <td>{data.status_komentar}</td>
                <td>
                  <button
                    className="but-mading btn btn-warning mx-1"
                    onClick={(e) => handleEditMading(e, data.id_mading)}
                  >
                    Edit
                  </button>
                  <button
                    className="but-mading btn btn-danger mx-1"
                    onClick={(e) => handleHapus(e, data.id_mading)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataMading;
