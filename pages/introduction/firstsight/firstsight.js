Page({
  data:{
    aspect:[
      {
        pic:'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51XWscbSAOzZcqQnWJFmw4u3vTYmKJs3tz0Jm9Tn7J4QMtoeo6F1qFI9Adf4S3Z3MmlGJL3eHcwcZA/0?wx_fmt=jpeg',
        pic2: 'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51XeUc9vqyf2an6uRZgYUqTVdMcGQNdl8JHOsYUX3YSTwR0bwibxgLZwokwK0qVgSzfFcrqhRRY5cwg/0?wx_fmt=jpeg',
        title:'风景',
        text:'\n 是槭树外的蓝天 \n 是彩虹前的骤雨 \n 是杂草下的山丘 \n 是路过风景的我们',
        tap:'f1'
      },
      {
        pic: 'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51XeUc9vqyf2an6uRZgYUqTVySiaYa5psqWwTTpkcmG5cLg88ahqjJORib2yjVDJSbPGe0E5jyID42ow/0?wx_fmt=jpeg',
        pic2:'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51W1to4Ubics3qnoIzj4mYRYyRzVd9AW24k8YMUCkTntusmMj7m3jy8eVpOHPfFp9EicEW1HVlVReRHQ/0?wx_fmt=png',
        title: '课程',
        text: '\n 美术课的画笔 \n 语文课的书声 \n 实验课的惊异 \n 我们打开知识的窗子',
        tap:'f2'
      },
      {
        pic: 'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51XeUc9vqyf2an6uRZgYUqTVy8NWAEIC2SgAxWqfxeribyiczdia32EZafICblKdlfkNtWaAYoEZEe5ZA/0?wx_fmt=jpeg',
        pic2: 'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51XeUc9vqyf2an6uRZgYUqTV3opKy8y44Yf6CzfqAuQ5kIgbgW7PANib06KXWXowcLjIMzibJIIib7Y8g/0?wx_fmt=jpeg',
        title: '孩子',
        text: '\n 他们渴望知识 \n 却更需要爱与陪伴 \n 这是我们努力的目的 \n 也是我们传承的理由',
        tap: 'f3'
      },
    ]
  },

  f1: function () {
    wx.navigateTo({
      url: '/pages/introduction/scenery/detail',
    })
  },

  f2: function () {
    wx.navigateTo({
      url: '/pages/introduction/lecture/detail',
    })
  },

  f3: function () {
    wx.navigateTo({
      url: '/pages/introduction/children/detail',
    })
  },

  f4:function(){
    wx.switchTab({
      url: '/pages/about/about',
    })
  }
})