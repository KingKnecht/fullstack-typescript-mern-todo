import WeekNavbar from "./WeekNavbar";
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import getWeek from 'date-fns/getWeek';
import Day from './Day'
require('./Admin.css')

export const Admin = () => {

  const now = new Date();
  const arr = eachDayOfInterval({
      start: startOfWeek(now, { weekStartsOn: 1 }),
      end: endOfWeek(now, { weekStartsOn: 1 })
  }).slice(0,5);

  const weekNumber = getWeek(now, {weekStartsOn : 1})

  return (
    <div>
      <h1>Overview: Week</h1>
      <WeekNavbar weekNumber={weekNumber} />
      <div className="week-overview">{arr.map(e => (<Day date={e}/>))}</div>
    </div>
  )

}

export default Admin;