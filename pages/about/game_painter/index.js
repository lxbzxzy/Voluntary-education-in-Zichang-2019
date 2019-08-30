Page({
  onShareAppMessage: function () {
    return {
      title: '涂方块益智游戏',
      path: '/pages/about/game_painter/index'
    }
  },

  data: {
    gamedata:[
      [
        'black', 'white', 'black', 'white', 'black', 'black'
      ],
      [
        'black', 'white', 'black', 'white', 'white', 'white'
      ],
      [
        'black', 'white', 'black', 'white', 'black', 'black'
      ],
    ],
    line:0,
    column:0,
    times:0,
    mode:1,
    success:false,
    rules:'游戏规则：点击其中一个方块后，该方块及与之相邻的方块颜色改变（黑色与白色的转换），通过点击方块，使所有方块变成白色。'
  },

  operation:function(e){
    var nowcolumn = e.currentTarget.dataset.index;
    this.setData({ column: nowcolumn });
    console.log('operation');
  },

  getline:function(e){
    var nowline=e.currentTarget.dataset.index;
    this.setData({line:nowline});
    console.log(this.data.line);
    console.log(this.data.column);
    var i = this.data.line, j = this.data.column;
    console.log(this.data.gamedata[i][j]);
    var newgamedata = this.data.gamedata;
    for(let x in newgamedata){
      for(let y in newgamedata[x]){
        if ((x == i && y == j) || (x - i == 1 && y == j) || (i - x == 1 && y == j) || (x == i && y - j == 1) || (x == i && j - y == 1)){
          newgamedata[x][y] = (newgamedata[x][y] =='black')?'white':'black';
        }
      }
    }
    this.setData({gamedata:newgamedata});
    var _times = this.data.times + 1;
    this.setData({ times: _times});
    var check = 0;
    for (let i in newgamedata) {
      for (let j in newgamedata[i]) {
        if (newgamedata[i][j] === 'black') {
          check = 1; break;
        }
      }
      if (check == 1) { break; }
    }
    if (check==0&&(!this.data.success)){
      wx.showToast({
        title: '恭喜通关',
        icon: 'success',
        duration: 2000})
      this.setData({success:true})
    }
  },

  changepattern:function(e){
    var nowmode=this.data.mode;
    nowmode+=1;
    this.setData({times:0,mode:nowmode});
    var gamematerial=this.data.gamedata;
    if(nowmode%3==1){
      gamematerial = [['black', 'white', 'black', 'white', 'black', 'black'], ['black', 'white', 'black', 'white', 'white', 'white'], ['black', 'white', 'black', 'white', 'black', 'black']];
    }
    else if(nowmode%3==2){
      gamematerial = [['white', 'black', 'white', 'white', 'black', 'black'], ['white', 'white', 'white', 'white', 'white', 'white'], ['black', 'black', 'white', 'white', 'black', 'white']];
    }
    else{
      gamematerial = [['black', 'black', 'black', 'white', 'white', 'white'], ['white', 'white', 'white', 'white', 'white', 'white'], ['white', 'white', 'white', 'black', 'black', 'black']];
    }
    this.setData({ gamedata:gamematerial});
    this.setData({ success:false });
  }
})
