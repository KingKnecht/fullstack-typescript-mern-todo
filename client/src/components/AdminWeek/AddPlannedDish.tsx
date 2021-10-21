import React, { FC, useState } from "react";
import { ActionMeta, OnChangeValue } from "react-select";
import Creatable from 'react-select/creatable';

interface IProps {
  savePlannedDish: (e: React.FormEvent, formData: IDish | any) => void
};

type DishOption = {
  value: string,
  label: string
}

const options = [
  { value: 'SpätzleMitSoß', label: 'Spätzle mit Soß' },
  { value: 'Bollo', label: 'Spaghetti Bolognese' },
  { value: 'Kässpätzle', label: 'Kässpätzle' }
]

const AddPlannedDish: FC<IProps> = (props) => {
  const [formData, setFormData] = useState<IDish | {}>()

  const handleChange = (
    newValue: OnChangeValue<DishOption, false>,
    actionMeta: ActionMeta<DishOption>
  ) => {

    setFormData({
      ...formData,
      name: newValue?.label,
    })

    if(actionMeta.action === 'select-option')
    {

    }
    
    // console.group('Value Changed');
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();

  };

  const handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form onSubmit={(e) => props.savePlannedDish(e, formData)}>
      <Creatable options={options}
        onInputChange={handleInputChange}
        onChange={handleChange} />
      <input type="submit" value="Save" />
    </form>)
};

export default AddPlannedDish;