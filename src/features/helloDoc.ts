import { TplFeature } from '@/types/utools';

const helloDoc: TplFeature = {
  mode: 'doc',
  args: {
    indexes: [
      {
        t: '这是标题',
        d: '这是描述',
        p: 'assets/doc/index.html', //页面, 只能是相对路径
      },
    ],
    placeholder: '文档模式',
  },
};

export default helloDoc;
