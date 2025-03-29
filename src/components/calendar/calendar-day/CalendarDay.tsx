import { Badge } from '@mantine/core';
import classes from '../Calendar.module.scss';

interface CalendarDayProps {
  day: undefined | number;
}

export function CalendarDay({ day }: CalendarDayProps) {
  const dayFragment = day ? <Badge color="deepBlue.5">{day}</Badge> : null;

  return <div className={classes.dayWrapper}>{dayFragment}</div>;
}
