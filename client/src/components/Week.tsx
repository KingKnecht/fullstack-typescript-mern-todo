import React, { FC } from "react";
//import styles from "./Week.module.css"

interface IProps {
};

const Week:FC<IProps> = (props) => {
  return <div>{props.children}</div>
};

export default Week;