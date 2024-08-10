import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';
import CustomNodeContent from "./customNodeContent";
import CustomExpandButton from "./customExpandButton";
import EmployeeDetailsCard from "./employeeDetailsCard";
import DetailedCard from './detailedCard';

const OrganizationalChart = (props) => {
  const d3Container = useRef(null);
  const [cardShow, setCardShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const chart = useRef(null);
  
  const handleShow = () => setCardShow(true);
  const handleClose = () => setCardShow(false);

  useEffect(() => {
    const toggleDetailsCard = (nodeId) => {
      handleShow();
      setEmployeeId(nodeId);
    };

    chart.current = new OrgChart();

    if (props.data && d3Container.current) {
      chart.current
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 300)
        .nodeHeight((d) => 140)
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) =>35)
        .onNodeClick((d) => {
          toggleDetailsCard(d);
        })
        .buttonContent((node, state) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomExpandButton {...node.node} />
          );
        })
        .nodeContent(function (d, i, arr, state) {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomNodeContent {...d} />
          );
        })
        .render();
    }
  }, [props, props.data]);

  const handleCenterNode = () => {
    console.log(chart.current);
    if (chart.current) {
      chart.current.setCentered(1).render();
    }
  };

  return (
    <>
      <div className="org-chart" ref={d3Container}>
      {/* <button onClick={handleCenterNode}>Gyamakhana</button> */}
        {cardShow && (
          <DetailedCard
            handleClose={handleClose}
          />
          // <EmployeeDetailsCard
          //   employees={props.data}
          //   employee={props.data.find((employee) => employee.id === employeeId)}
          //   handleClose={handleClose}
          // />
        )}
      </div>
    </>
  );
};

export default OrganizationalChart;
