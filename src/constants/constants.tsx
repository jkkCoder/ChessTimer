import { SvgProps } from 'react-native-svg';
// import ClockIcon from '../assets/svg/
// import LightningIcon from '../assets/icons/LightningIcon.svg';
// import CustomIcon from '../assets/icons/CustomIcon.svg';

export const mockTimerPills = [
  {
    sectionHeaderValue: "Short Breaks",
    minutesOrSeconds: "minutes",
    timerPillValue: 5,
    IconComponent: ClockIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Short Breaks",
    minutesOrSeconds: "minutes",
    timerPillValue: 10,
    IconComponent: ClockIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Short Breaks",
    minutesOrSeconds: "minutes",
    timerPillValue: 15,
    IconComponent: ClockIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Work Intervals",
    minutesOrSeconds: "minutes",
    timerPillValue: 25,
    IconComponent: LightningIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Work Intervals",
    minutesOrSeconds: "minutes",
    timerPillValue: 45,
    IconComponent: LightningIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Work Intervals",
    minutesOrSeconds: "minutes",
    timerPillValue: 60,
    IconComponent: LightningIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Custom Times",
    minutesOrSeconds: "seconds",
    timerPillValue: 30,
    IconComponent: CustomIcon as React.FC<SvgProps>, // Another example icon
  },
  {
    sectionHeaderValue: "Custom Times",
    minutesOrSeconds: "seconds",
    timerPillValue: 90,
    IconComponent: CustomIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Dual Timers",
    minutesOrSeconds: "minutes",
    timerPillValue: { valueOne: 5, valueTwo: 2 },
    IconComponent: undefined, // You can also have no icon for some pills
  },
  {
    sectionHeaderValue: "Dual Timers",
    minutesOrSeconds: "minutes",
    timerPillValue: { valueOne: 25, valueTwo: 5 },
    IconComponent: ClockIcon as React.FC<SvgProps>,
  },
  {
    sectionHeaderValue: "Split Focus",
    minutesOrSeconds: "seconds",
    timerPillValue: { valueOne: 45, valueTwo: 15 },
    IconComponent: LightningIcon as React.FC<SvgProps>,
  },
];