import React, { FC } from "react";

interface IProps {
  name : string
};

const Dish:FC<IProps> = (props) => {
  
  return <div>
    <p>{props.name}</p>
  </div>
};

export default Dish;