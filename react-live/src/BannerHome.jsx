import React from "react";
const BannerHome = () => {
  return (
    <div className="BannerHome">
      <div className="BannerInfo">
        <h1>Aratati aprecierea colegului ce te-a ajutat recent</h1>
        <p> Sau doar simti ca merita o bere cu adevarat!</p>
        <div className="HomeActionButton">
          <button className="btn">Da o bere</button>
          <small className="text-muted">
            Va rugam da-ti berea cu responsabilitate.
          </small>
        </div>
      </div>
      <div className="BannerBigImage">
        <div className="BigImageHome"></div>
      </div>
    </div>
  );
};

export default BannerHome;
