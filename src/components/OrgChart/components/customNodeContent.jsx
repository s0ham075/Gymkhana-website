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

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, paddingTop: `${imageDiffVert - 2}px`, paddingLeft: '1px', paddingRight: '1px' }}>
      <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: color, marginLeft: '-1px', width: `${width - 2}px`, height: `${height - imageDiffVert}px`, borderRadius: '10px', border: '1px solid #E4E2E9' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px', marginRight: '8px' }}>#{data.id}</div>
        <div style={{ backgroundColor: color, marginTop: `${-imageDiffVert - 20}px`, marginLeft: '15px', borderRadius: '100px', width: '50px', height: '50px' }}></div>
        <div style={{ marginTop: `${-imageDiffVert - 20}px` }}>
          <img src={data.image} alt="Profile" style={{ marginLeft: '20px', borderRadius: '100px', width: '40px', height: '40px' }} />
        </div>
        <div style={{ fontSize: '15px', color: '#08011E', marginLeft: '20px', marginTop: '10px' }}>{data.name}</div>
        <div style={{ color: '#716E7B', marginLeft: '20px', marginTop: '3px', fontSize: '10px' }}>{data.position}</div>
      </div>
    </div>
  );
};

export default CustomNodeContent;
