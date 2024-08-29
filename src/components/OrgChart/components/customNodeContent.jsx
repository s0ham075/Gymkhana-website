import React from "react";
import { FaBuilding } from "react-icons/fa";
import "../styles.css";

const CustomNodeContent = (props) => {
  const color = '#FFFFFF';
  const imageDiffVert = 25 + 2;

  return (
    <>
      <div className="node-container">
        {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px', marginRight: '8px' }}>#{props.data.id}</div> */}
        <div className="node-details" style={{ width: `${props.width - 2}px`, height: `${props.height - imageDiffVert}px`,}}>
          {props.data.team === "" ? (
            <>
            <div className="node-note-top-right">
              <img src={props.data.imageUrl} alt="Profile" style={{borderRadius: '100px', width: '40px', height: '40px' }} />
            </div>
            <div className="node-content">
              <img
                className="node-img"
                src={props.data.imageUrl}
                alt="Profile"
              />
              <div className="node-info">
                <div className="node-name">{props.data.name}</div>
                <div className="node-role">{props.data.positionName}</div>
                {props.data.department && (
                  <div className="node-department">
                    <FaBuilding />
                    <div>{props.data.department}</div>
                  </div>
                )}
              </div>
            </div>
            </>
          ) : (
            <div className="node-team">
              <div className="node-team-name">{props.data.team}</div>
              {props._children !== null &&
                props._children
                  .slice(0, 4)
                  .map((child) => (
                    <img
                      key={child.data.id}
                      className="node-team-member-img"
                      src={child.data.imageUrl}
                      alt="team member"
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};


const ProfileCard = ({ width, height, data }) => {
  const color = '#FFFFFF';
  const imageDiffVert = 25 + 2;

  // function getRandomColor() {
  //   return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
  // }

  function rainbow(numOfSteps, step) {
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2) + 'be';
    return (c);
}

  return (
    <div className={"pl-1 pr-1"}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      paddingTop: `${imageDiffVert - 2}px`,
    }}>
      <div
        className={`ml-[-1px] rounded-lg border border-gray-300`}
        style={{
          backgroundColor: color,
          width: `${width - 2}px`,
          height: `${height - imageDiffVert}px`,
        }}
      >
        <div className="text-black flex justify-end mt-[5px] mr-[8px]">
          #{data.id}
        </div>
        
        <div
          className="rounded-full"
          style={{
            backgroundColor: color,
            marginTop: `${-imageDiffVert - 20}px`,
            marginLeft: '10px',
            width: '60px',
            height: '60px'
          }}
        ></div>

        <div
          className="relative "
          style={{
            marginTop: `${-imageDiffVert - 30}px`,
          }}
        >
          <img
            src={data.imageUrl}
            alt="Profile"
            className="rounded-full min-h-full w-[50px] h-[50px] block object-contain ml-[15px] "
            style={{
              background: rainbow(4, data.id),
            }}
          />
        </div>

        <div className="text-[15px] text-[#08011E] ml-[20px] mt-[10px]">
          {data.name}
        </div>
        
        <div className="text-[10px] text-[#716E7B] ml-[20px] mt-[3px]">
          {data.positionName}
        </div>
        
        <div className="text-[10px] text-[#716E7B] ml-[20px] mt-[3px]">
          {data.committee}
        </div>
      </div>
    </div>
  );
};

export { CustomNodeContent, ProfileCard };
