Page({
  onShareAppMessage: function () {
    return {
      title: '益智游戏',
      path: '/pages/about/game/index'
    }
  },
  data: {
    scenery: [
      {
        name:'game_painter',
        pic: 'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51WNYV8spXibIYEns9bVdec4NgI9nMjNPW5SsLqbMXTo2rKibB3ecLFKthD9040icltFYmeN93p52ndZA/0?wx_fmt=jpeg',
        title: '涂方块',
        intro: '\n 游戏规则：点击其中一个方块后，该方块及与之相邻的方块颜色改变（黑色与白色的转换），通过点击方块，使所有方块变成白色。',
      },
      {
        name: 'game_sudoku',
        pic: 'https://mmbiz.qpic.cn/mmbiz_jpg/bz1d0u9o51WNYV8spXibIYEns9bVdec4N3MoSsNmKeDkx7VLWWfqjOlupfayUEnnXSb9VcBVhM9NaPibzlLrgH4Q/0?wx_fmt=jpeg',
        title: '数独',
        intro: '\n 根据9×9盘面上的已知数字，推理出所有剩余空格的数字，并满足每一行、每一列、每一个粗线宫（3*3）内的数字均含1-9，不重复。',
      },
    ]
  }
})