import React from "react";
import OrganizationalChart from "../../components/OrgChart/components/orgChart.jsx";
import { FiExternalLink } from "react-icons/fi";
import { cn } from '@/lib/utils'
import data from "./data.jsx";

const App = ({
  className,
  href = null,
  children: _children = null,
}) => {
  return (
    <>
      <h1 className="title">Organization Chart</h1>
      <div className={cn(className)}>
        { _children }
        { href &&
        <div className="flex justify-end w-full absolute p-4">
          <a href={href} className="btn btn-primary bg-black/60 p-2 rounded-[6px]">
          <FiExternalLink size={25}/>
          </a>
        </div>
    }
      <OrganizationalChart data={data} />

    </div>
    </>
  );
};

export default App;