import React from "react";
import { useState } from "react";
const Leaderboard = () => {
  const [timeframeIndex, setTimeFrameIndex] = useState(0);

  const HandleChangeLeaderBoardOption = (index) => {
    setTimeFrameIndex(index);
    // console.log(index)
  };

  const getLeaderBoardOptionClassName = (index) => {
    return "leaderboardOptions " + (timeframeIndex == index ? "active" : "");
  };

  const foo_data = [
    { Avatar: "beer.png", Name: "Grig", Beri: 1800 },
    { Avatar: "beer.png", Name: "Juni", Beri: 1600 },
    { Avatar: "beer.png", Name: "Paul", Beri: 1000 },
    { Avatar: "beer.png", Name: "Andreea", Beri: 700 },
    { Avatar: "beer.png", Name: "Horia", Beri: 300 },
  ];
  const max_beri= Math.max(...foo_data.map((el)=>el.Beri))
  return (
		<div className="pageBodyLeaderboard">
			<svg className="leaderBoardWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#ef6951"
					fill-opacity="1"
					d="M0,256L48,245.3C96,235,192,213,288,170.7C384,128,480,64,576,80C672,96,768,192,864,208C960,224,1056,160,1152,112C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
			<div className="backDroppedBody">
				<div className={getLeaderBoardOptionClassName(0)} onClick={() => HandleChangeLeaderBoardOption(0)}>
					Aceasta saptamana
				</div>
				<div className={getLeaderBoardOptionClassName(1)} onClick={() => HandleChangeLeaderBoardOption(1)}>
					Aceasta luna
				</div>
				<div className={getLeaderBoardOptionClassName(2)} onClick={() => HandleChangeLeaderBoardOption(2)}>
					Dintotdeauna
				</div>
			</div>
			<div className="frontDroppedBody">
				{
                foo_data.map((el, index) => (
					<div className="leaderboardRow" key={index+'leaderboardRow'}>
						<div style={{ display: "flex", flexDirection: "column",width:'90%' }}>
							<div style={{ display: "flex" }}>
								<img src={"/imgs/" + el.Avatar} className="Pic"></img>
								<div className="Name">
									<span
										style={{
											color: "#e1604a",
											padding: "0px 5px",
										}}
									>
										{index + 1}.{" "}
									</span>
									{el.Name}
								</div>
							</div>
							<div className="progress" style={{width:'100%',backgroundColor:'#313445',height:'5px',margin:'10px 0px'}}>
								<div
									className="progress-bar"
									role="progressbar"
									style={{width:el.Beri / max_beri *100 +'%',background:'linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25))'}}
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="Points">{el.Beri}</div>
					</div>
				))}
			</div>
		</div>
  );
};

export default Leaderboard;
