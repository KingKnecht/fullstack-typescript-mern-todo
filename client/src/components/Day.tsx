import format from 'date-fns/format';
import de from 'date-fns/locale/de';

type Props = {
  date : Date
}

const Day: React.FC<Props> = (props) => {

   return (
    <div>
      <h1>{format(props.date, 'eeee', { locale: de })}</h1>
      <div>{format(props.date, 'PPP', { locale: de })}</div>
    </div>
  )

}

export default Day;