import styles from './WeekNavbar.module.css'

type Props = {
  weekNumber : number
  onWeekChanged : (offset: number) => void;
}

const WeekNavbar : React.FC<Props> = (props) => {
  
  const onPreviousClicked = (_event : React.UIEvent) => props.onWeekChanged(-1);
  const onNextClicked = (_event : React.UIEvent) => props.onWeekChanged(1);

  return (
    <div className={styles.week_navbar}>
      <button className="btn-prev" onClick={onPreviousClicked}>&lt;</button>
      <div>
        <span>Week: </span>
        <span>{props.weekNumber}</span>
      </div>
      <button className="btn-next" onClick={onNextClicked}>&gt;</button>
    </div>
  )

}

export default WeekNavbar;