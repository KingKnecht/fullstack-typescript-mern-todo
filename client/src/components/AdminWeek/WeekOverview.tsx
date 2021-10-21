import React, { FC } from "react";
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import getWeek from 'date-fns/getWeek';
import addDays from 'date-fns/addDays';
import Day from './Day'
import { useState } from "react";
import WeekNavbar from "./WeekNavbar";
//import styles from "./WeekOverview.module.css"
import Week from "./Week";
import { format } from "path/posix";
import { addPlannedDish } from "../../API";

interface IProps { };

const WeekOverview: FC<IProps> = () => {

  const [now, setNow] = useState(new Date());
 
  const start = startOfWeek(now, { weekStartsOn: 1 });
  const end = endOfWeek(now, { weekStartsOn: 1 });
  
 

  const arr = eachDayOfInterval({
    start: start,
    end: end
  }).slice(0, 5);

  const weekNumber = getWeek(now, { weekStartsOn: 1 })
  const onWeekChanged = (offset: number) => {
    console.log(offset);
    offset >= 0
      ? setNow((old) => addDays(old, 7))
      : setNow((old) => addDays(old, -7));
  }


  return (
    <div>
      <h1>Overview: Week</h1>
      <WeekNavbar onWeekChanged={onWeekChanged} weekNumber={weekNumber} />
      {/* <div className="week_overview">{arr.map(e => (<Day date={e} />))}</div> */}
      <Week>{arr.map(e => (<Day date={e} key={e.toString()}/>))}</Week>
    </div>);
};

export default WeekOverview;