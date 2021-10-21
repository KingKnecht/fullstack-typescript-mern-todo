import format from 'date-fns/format';
import de from 'date-fns/locale/de';
import React, { useEffect, useState } from 'react';
import { addPlannedDish, getDishes, getPlannedDishes } from '../../API';
import Card from '../UI/Card';
import AddPlannedDish from './AddPlannedDish';
import styles from "./Day.module.css";
import Dish from './Dish';

type Props = {
  date: Date
}

const Day: React.FC<Props> = (props) => {

  const [plannedDishes, setPlannedDishes] = useState<IDish[]>([])
  const [dishes, setDishes] = useState<IDish[]>([])

  const handleSavePlannedDish = (e: React.FormEvent, formData: IDish)
    : void => {
    e.preventDefault()
    
    formData = {
      ...formData,
      plannedOn : format(props.date, "dd-MM-yyyy")
    }

    addPlannedDish(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! PlannedDish not saved')
        }
        setPlannedDishes(data.plannedDishes)
      })
      .catch((err) => console.log(err))
  }
  const fetchPlannedDishes = (): void => {
    getPlannedDishes(format(props.date, "dd-MM-yyyy"))
      .then(({ data: { dishes } }: IDish[] | any) => {
        setPlannedDishes(dishes)
      })
      .catch((err: Error) => console.log(err))
  }

  const fetchDishes = (): void => {
    getDishes()
      .then(({ data: { dishes } }: IDish[] | any) => setDishes(dishes))
      .catch((err: Error) => console.log(err))
  }

  useEffect(() => {
    fetchPlannedDishes()
  }, [])



  return (
    <Card className={styles.day_card}>
      <h1>{format(props.date, 'eeee', { locale: de })}</h1>
      <div>{format(props.date, 'PPP', { locale: de })}</div>
      <AddPlannedDish savePlannedDish={handleSavePlannedDish} />
      {plannedDishes.map(d => <Dish name={d.name}/>)}
    </Card>
  )

}

export default Day;




