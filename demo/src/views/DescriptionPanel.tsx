import React, { FC } from "react";
import { BsInfoCircle } from "react-icons/bs";

import Panel from "./Panel";

const DescriptionPanel: FC = () => {
  return (
    <Panel
      //initiallyDeployed
      title={
        <>
          <BsInfoCircle className="text-muted" /> Description
        </>
      }
    >
      <p>
        This map represents a <i>network</i> of Wikipedia articles around the topic of "Data visualization". Each{" "}
        <i>node</i> represents an article, and each edge a{" "}
        <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/See_also">
          "See also" link
        </a>
        .
      </p>
    </Panel>
  );
};

export default DescriptionPanel;
