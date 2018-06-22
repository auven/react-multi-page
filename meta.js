module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: '项目名称',
    },
    description: {
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'react 多页应用',
    },
    author: {
      type: 'string',
      message: '作者',
    },
    autoInstall: {
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ]
    }
  }
}
