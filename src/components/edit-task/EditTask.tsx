import { ActionIcon, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Task } from '../../types/task.ts';
import { EditTaskForm } from './edit-task-form/EditTaskForm.tsx';

interface EditTaskProps {
  task?: Task;
}

export function EditTask({ task }: EditTaskProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const icon = task ? 'edit' : 'add_task';
  const title = task ? 'Edit Task' : 'Add Task';

  return (
    <>
      <ActionIcon variant="gradient" size="xl" onClick={open}>
        <span className="material-icons">{icon}</span>
      </ActionIcon>

      <Drawer position={'right'} opened={opened} onClose={close} title={title}>
        <EditTaskForm task={task} />
      </Drawer>
    </>
  );
}
