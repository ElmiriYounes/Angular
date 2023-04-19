import { IService } from 'src/interfaces/services.interface';
import { card, machineIcon, shirt } from './images';

export const services: IService[] = [
  {
    icon: machineIcon,
    title: 'Coin & coinless machines',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi tempora placeat, non repellat asperiores iure nostrum sed fugiat repudiandae modi ipsam corporis? Optio, debitis cumque. Tempore quisquam cupiditate porro quae.',
  },
  {
    icon: shirt,
    title: 'Fluff & fold service available',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi tempora placeat, non repellat asperiores iure nostrum sed fugiat repudiandae modi ipsam corporis? Optio, debitis cumque. Tempore quisquam cupiditate porro quae.',
  },
  {
    icon: card,
    title: 'Loyalty card',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi tempora placeat, non repellat asperiores iure nostrum sed fugiat repudiandae modi ipsam corporis? Optio, debitis cumque. Tempore quisquam cupiditate porro quae.',
  },
];
