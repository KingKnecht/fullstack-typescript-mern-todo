import React, { FC } from "react";
import css from './Card.module.css'

interface IProps {
  className : string | undefined;
 };

const Card: FC<IProps> = (props) => {
  return <div className={`${css.card} ${props.className}`}>{props.children}</div>;
};

export default Card;