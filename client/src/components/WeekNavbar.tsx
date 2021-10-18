require('./WeekNavbar.css')
type Props = {
  weekNumber : number
}

const WeekNavbar : React.FC<Props> = (props) => {
  

  return (
    <div className="week-navbar">
      <button className="btn-prev">&lt;</button>
      <div>
        <span>Week: </span>
        <span>{props.weekNumber}</span>
      </div>
      <button className="btn-next">&gt;</button>
    </div>
  )

}

export default WeekNavbar;