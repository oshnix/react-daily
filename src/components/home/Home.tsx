import { Calendar } from '../calendar/Calendar.tsx';
import { EditTask } from '../edit-task/EditTask.tsx';
import classes from './Home.module.scss';

export function Home() {
  return (
    <>
      <Calendar />

      <div className={classes.actionButtons}>
        <EditTask />
      </div>
    </>
  );
}
