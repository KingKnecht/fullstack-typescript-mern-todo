import format from 'date-fns/format';
import de from 'date-fns/locale/de';
import React from 'react';
import Card from '../UI/Card';

type Props = {
  date: Date
}

const Day: React.FC<Props> = (props) => {

  return (
    <Card className="day-card">
      <h1>{format(props.date, 'eeee', { locale: de })}</h1>
      <div>{format(props.date, 'PPP', { locale: de })}</div>
    </Card>
  )

}

export default Day;




