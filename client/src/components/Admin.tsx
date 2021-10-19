import styles from './Admin.module.css'
import WeekOverview from "./WeekOverview";

export const Admin = () => {

  return (
    <div className={styles.admin}>
      <WeekOverview/>
    </div>
  );
}

export default Admin;