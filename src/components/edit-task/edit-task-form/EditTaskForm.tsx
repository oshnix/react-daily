import { Button, SegmentedControl, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import {
  Task,
  taskInitialValues,
  taskRepetitionOptions,
} from '../../../types/task.ts';
import classes from '../EditTask.module.scss';

interface EditTaskFormProps {
  task?: Task;
}

export function EditTaskForm({ task }: EditTaskFormProps) {
  const form = useForm<Task>({
    mode: 'uncontrolled',
    onSubmitPreventDefault: 'validation-failed', // todo this way it redirects!
    initialValues: task ?? taskInitialValues,

    validate: {
      name: (value) => (value?.length ? null : 'Name is required'),
    },
  });

  const datePickerProps = form.getInputProps('date');

  const handleSubmit = (values: Task) => {
    alert(values); // todo save the data
  };

  return (
    <form
      className={classes.editTaskForm}
      onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <DatePicker
        defaultDate={datePickerProps.defaultValue}
        key={form.key('date')}
        {...datePickerProps}
      />

      <SegmentedControl
        data={taskRepetitionOptions}
        key={form.key('repetition')}
        {...form.getInputProps('repetition')}
      />

      <Button type="submit" variant="gradient">
        Submit
      </Button>
    </form>
  );
}
