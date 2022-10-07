import { useState, useEffect } from "react";

import { ReactComponent as Chevron } from "../../image/chevron-down.svg";

const All = ({ updateRegion }) => {
  const [selected, setSelected] = useState(false);
  const [region, setRegion] = useState(
    localStorage.getItem("region") || "Filter by Region"
  );

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSelected(false);
    }, 100);
  };

  useEffect(() => {
    updateRegion(region);
  }, [region, updateRegion]);

  return (
    <div className="filter">
      <button
        onClick={handleClick}
        onBlur={handleBlur}
        className={selected ? "unfolded" : ""}
      >
        {region} <Chevron />
      </button>
      <div className={selected ? "options selected" : "options"}>
        <div
          className="option"
          onClick={() => {
            setRegion("ทั่วทุกภาค");
          }}
        >
          ทั่วทุกภาค
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("ใต้");
          }}
        >
          ใต้
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("ตะวันออก");
          }}
        >
          ตะวันออก
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("เหนือ");
          }}
        >
          เหนือ
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("ตะวันออกเฉียงเหนือ");
          }}
        >
          ตะวันออกเฉียงเหนือ
        </div>
      </div>
    </div>
  );
};

export default All;

// https://github.com/leonardomeza87
