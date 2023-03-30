/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx99dbe9338706f4fe',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '014206010eee154e1058246e34f5a7e8',

  PROVINCE: '苏州',
  CITY: '太仓市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '索索',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owadk6i_uwh_yEN0ny5-JbifA7_s',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-14',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '索索', year: '1995', date: '09-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-18' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owadk6i_uwh_yEN0ny5-JbifA7_s',
    }
  ],

}

module.exports = USER_CONFIG

