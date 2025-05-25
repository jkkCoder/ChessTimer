import { SvgProps } from 'react-native-svg';
import ClockIcon from '../assets/svg/timer.svg';
import LightningIcon from '../assets/svg/thunder.svg';
import CustomTimerIcon from '../assets/svg/custom-timer.svg';
import Bullet from "../assets/svg/bullet.svg"
import Sun from "../assets/svg/sun.svg"

export type TimerPillValue = number | { valueOne: number; valueTwo: number };
export type timeDuration = 'minutes' | 'seconds' | 'days' | 'months' | 'years';

export interface TimerPillItem {
  timeDuration: timeDuration;
  timerPillValue: TimerPillValue;
  IconComponent?: React.FC<SvgProps>;
}

export interface TimerSection {
  title: string;
  data: TimerPillItem[];
}

export const mockTimerPillsForBullet: TimerSection[] = [
  {
    title: "Bullet",
    data: [
      {
        timeDuration: "minutes",
        timerPillValue: 5,
        IconComponent: ClockIcon,
      },
      {
        timeDuration: "minutes",
        timerPillValue: 10,
        IconComponent: ClockIcon,
      },
      {
        timeDuration: "minutes",
        timerPillValue: 15,
        IconComponent: ClockIcon,
      },
    ],
  },
];

export const mockTimerPillsForBlitz: TimerSection[] = [
  {
    title: "Blitz",
    data: [
      {
        timeDuration: "minutes",
        timerPillValue: 25,
        IconComponent: LightningIcon,
      },
      {
        timeDuration: "minutes",
        timerPillValue: 45,
        IconComponent: LightningIcon,
      },
      {
        timeDuration: "minutes",
        timerPillValue: 60,
        IconComponent: LightningIcon,
      },
    ],
  },
];

export const mockTimerPillsForRapid: TimerSection[] = [
  {
    title: "Rapid",
    data: [
      {
        timeDuration: "minutes",
        timerPillValue: { valueOne: 5, valueTwo: 2 },
        IconComponent: undefined,
      },
      {
        timeDuration: "minutes",
        timerPillValue: { valueOne: 25, valueTwo: 5 },
        IconComponent: ClockIcon,
      },
    ],
  },
];

export const mockTimerPillsForDaily: TimerSection[] = [
  {
    title: "Daily",
    data: [
      {
        timeDuration: "days",
        timerPillValue: 20,
        IconComponent: LightningIcon,
      },
      {
        timeDuration: "days",
        timerPillValue: 20,
        IconComponent: LightningIcon,
      },
      {
        timeDuration: "days",
        timerPillValue: 20,
        IconComponent: LightningIcon,
      },
      {
        timeDuration: "days",
        timerPillValue: 20,
        IconComponent: LightningIcon,
      },
    ],
  },
];

export const allTimerSections = [
  { key: 'bullet', data: mockTimerPillsForBullet, icon: Bullet},
  { key: 'blitz', data: mockTimerPillsForBlitz, icon: LightningIcon },
  { key: 'rapid', data: mockTimerPillsForRapid, icon: ClockIcon},
  { key: 'daily', data: mockTimerPillsForDaily, icon: Sun},
];