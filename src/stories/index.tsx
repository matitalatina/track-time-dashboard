import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import { Button, Welcome } from '@storybook/react/demo';
import React from 'react';
import { LapRow } from '../components/lap-row/LapRow';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
        😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('LapRow', module)
    .add('with lap', () => {
        const driverLapStatus = {
            driver: {
                name: 'Mattia',
                surname: 'Natali',
            },
            currentLap: {
                position: 1,
                sectorsTimeMillis: [6001, 7001, 8001],
            },
            previousLap: {
                position: 1,
                sectorsTimeMillis: [6000, 7000, 8000],
            }
        }
        return (<LapRow driverLapStatus={driverLapStatus}></LapRow>)
    })