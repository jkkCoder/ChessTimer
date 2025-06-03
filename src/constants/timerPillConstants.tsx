import { ITimerControlsObj } from 'interface/timerInterface';
import ClockIcon from '../assets/svg/timer.svg';
import LightningIcon from '../assets/svg/thunder.svg';
import Bullet from "../assets/svg/bullet.svg"


export const chessTimeControls : ITimerControlsObj[] = [
  {
    title: 'Bullet',
    Icon: Bullet,
    data: [
      { displayString: '1 min', time: 60, incremental: 0 },
      { displayString: '1 | 1', time: 60, incremental: 1 },
      { displayString: '2 | 1', time: 120, incremental: 1 },
    ],
  },
  {
    title: 'Blitz',
    Icon: LightningIcon,
    data: [
      { displayString: '3 min', time: 180, incremental: 0 },
      { displayString: '3 | 2', time: 180, incremental: 2 },
      { displayString: '5 min', time: 300, incremental: 0 },
      { displayString: '5 | 5', time: 300, incremental: 5 },
      { displayString: '5 | 2', time: 300, incremental: 2 },
    ],
  },
  {
    title: 'Rapid',
    Icon: ClockIcon,
    data: [
      { displayString: '10 min', time: 600, incremental: 0 },
      { displayString: '15 | 10', time: 900, incremental: 10 },
      { displayString: '30 min', time: 1800, incremental: 0 },
      { displayString: '10 | 5', time: 600, incremental: 5 },
      { displayString: '20 min', time: 1200, incremental: 0 },
      { displayString: '60 min', time: 3600, incremental: 0 },
    ],
  },
];