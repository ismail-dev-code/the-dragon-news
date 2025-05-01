import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mb-5">QZone</h1>
      <div className="space-y-5">
        <img src={swimmingImg} alt="swimming image loading" />
        <img src={classImg} alt="classImg" />
        <img src={playGroundImg} alt="playGroundImg" />
      </div>
    </div>
  );
};

export default QZone;
