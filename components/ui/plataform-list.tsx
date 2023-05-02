import { createElement, Fragment } from 'react';
import type { IconType } from 'react-icons';
import { BsGlobeAsiaAustralia } from 'react-icons/bs';
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import type { ParentPlatform } from '@/types';

const iconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  nintendo: SiNintendo,
  web: BsGlobeAsiaAustralia,
};

export default function PlataformList({ plataforms }: { plataforms: ParentPlatform[] }) {
  return (
    <div className='flex gap-2'>
      {plataforms.map(({ platform }) => (
        <Fragment key={platform.id}>{createElement(iconMap[platform.slug])}</Fragment>
      ))}
    </div>
  );
}
