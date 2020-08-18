import { TplFeature } from '@/types/utools';
import Hello from '@/Hello';

const helloNone: TplFeature = {
  mode: 'none',
  args: {
    placeholder: '无 UI 模式',
    enter: (action, cb) => {
      Hello.sayHello('Hello None');
      utools.outPlugin();
    },
  },
};

export default helloNone;
