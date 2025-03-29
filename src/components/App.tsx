import { MantineProvider } from '@mantine/core';
import classes from './../styles/common.module.scss';
import { theme } from './../styles/theme.ts';
import { Home } from './home/Home.tsx';

export function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <div className={classes.appWrapper}>
        <Home />
      </div>
    </MantineProvider>
  );
}
