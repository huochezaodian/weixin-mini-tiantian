// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  try {
    console.log("Sending message with event data:", event);

    let openid = cloud.getWXContext().OPENID;  // 获取用户的openid
    if (openid === 'oE8aF5LI5DLnwXCmdH8Qy_Z3A2l8') {//_openidA放到单引号里
        openid = 'oE8aF5AEtY2oSASnrghfQU1Lz2Hw';//_openidB放到单引号
    } else {
        openid = 'oE8aF5LI5DLnwXCmdH8Qy_Z3A2l8';//_openidA放到单引号里
    }

    const result = await cloud.openapi.subscribeMessage.send({
      touser: openid, // 发送通知给谁的openid(把上面挑好就行，这块不用动)
      data: {
        thing7: {
          value: '叮咚~' + event.title
        },
        short_thing8: {
          value: event.credit
        },
        time9: {
          value: event.date
        },
        thing6: {
          value: event.desc
        }
      },
      
      templateId: event.templateId, // 模板ID
      miniprogramState: 'developer',
      page: 'pages/MainPage/index' // 这个是发送完服务通知用户点击消息后跳转的页面
    })
    console.log("Sending message with event data:", event);

    console.log("Message sent successfully:", result);
    return event.startdate
  } catch (err) {
    console.log("Error while sending message:", err);
    return err
  }
}
