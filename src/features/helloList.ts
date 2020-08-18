import { TplFeature } from '@/types/utools';

const helloList: TplFeature = {
  mode: 'list',
  args: {
    placeholder: '列表模式',
    enter: (action, callbackSetList) => {
      console.log(action);
      // 如果进入插件就要显示列表数据
      callbackSetList([
        {
          title: '这是标题',
          description: '这是描述(跳去我的github)',
          icon: '', // 图标(可选)
          url: 'https://github.com/adams549659584/utools-tmpl',
        },
      ]);
    },
    search: (action, searchWord, callbackSetList) => {
      // 获取一些数据
      // 执行 callbackSetList 显示出来
      callbackSetList([
        {
          title: searchWord,
          description: '虽然文字变了，但是还是跳去我的github',
          icon: '', // 图标，
          url: 'https://github.com/adams549659584/utools-tmpl',
          other: 'xxx',
        },
      ]);
    }, // 用户选择列表中某个条目时被调用
    select: (action, itemData, callbackSetList) => {
      utools.hideMainWindow();
      const url = itemData.url;
      require('electron').shell.openExternal(url);
      utools.outPlugin();
    },
  },
};

export default helloList;
