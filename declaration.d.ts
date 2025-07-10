declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

import * as momentType from 'moment';

declare module 'moment' {
  function duration(
    inp?: momentType.DurationInput,
    unit?: momentType.unitOfTime.DurationConstructor
  ): momentType.Duration;

  interface Duration {
    format: (template: string, precision?: number, settings?: any) => string;
  }
}

declare module 'moment-duration-format' {
  const plugin: (moment: typeof import('moment')) => void;
  export = plugin;
}
