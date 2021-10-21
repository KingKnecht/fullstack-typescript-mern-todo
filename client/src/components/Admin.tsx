import { useState } from 'react';
import { addPlannedDish } from '../API';
import styles from './Admin.module.css'
import WeekOverview from "./AdminWeek/WeekOverview";





export const Admin = () => {

  
  return (
    <div className={styles.admin}>
      <WeekOverview/>
    </div>
  );
}

export default Admin;