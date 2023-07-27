import { useEffect, useState } from "react";
import "./madingadmin.css";
import DataMading from "./DataMading";

const MadingAdmin = () => {
  const [Halaman, setHalaman] = useState();

  useEffect(() => {
    setHalaman(<DataMading setHalaman={setHalaman} />);
  }, []);

  return (
    <div className="mading-admin container py-3">
      <div className="judul-admin mb-5">
        <p className="text-judul-admin d-flex align-items-center justify-content-center">
          Manajemen Mading
        </p>
      </div>

      <div>{Halaman}</div>
    </div>
  );
};

export default MadingAdmin;
