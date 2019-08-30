Page({
  onShareAppMessage: function () {
    return {
      title: '数独益智游戏',
      path: '/pages/about/game_sudoku/index'
    }
  },

  data: {
    array:[1,2,3,4,5,6,7,8,9,'?'],
    gamedata: [
      { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue'  ,bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line1*/
{ num: 6, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 7, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue',bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line2*/
{ num: 3, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue',bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue'  , bkc: 'white' },/*line3*/
{ num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 7, color: 'black', bkc: 'lightgray' },/*line4*/
{ num: 1, color: 'black', bkc: 'lightgray' }, { num: 6, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line5*/
      { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' }, { num: 2, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line6*/
{ num: 7, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 2, color: 'black', bkc: 'white' }, { num: 4, color: 'black', bkc: 'lightgray' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: 8, color: 'black',bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' },/*line7*/
{ num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: 6, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black',bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' },/*line8*/
{ num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 8, color: 'black', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black',bkc: 'white' }, { num: 3, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'white' },/*line9*/],
    row:0,
    column:0,
    times:0,
    mode:1,
    inputing:false,
    inputblock:0,
    choosecolor:'black',
    rules: '游戏规则：点击非黑色字体的方块，再点击下面的数字填入，使得每行每列每个大方块中所有数字均不重复。'
  },

  operation:function(e){
    var newgamedata = this.data.gamedata;
    if(this.data.inputing){
      var last=this.data.inputblock;
      newgamedata[last].bkc=this.data.choosecolor;
    }
    var number = e.currentTarget.dataset.index;
    if(this.data.gamedata[number].color=='black'){return;}
    this.setData({ inputing: true })
    this.setData({ inputblock: number })
    this.setData({ choosecolor: this.data.gamedata[number].bkc })
    var column=number%9;
    var row=(number-column)/9;
    console.log(row);
    console.log(column);
    newgamedata[number].bkc ='rgba(160, 124, 154,0.7)';
    this.setData({gamedata:newgamedata})
  },

  checkwrong: function () {
    console.log('check');
    var block=this.data.inputblock;
    var nowgamedata=this.data.gamedata;
    var blocknum=nowgamedata[block].num;
    var column = block % 9;
    var row = (block - column) / 9;
    if(nowgamedata[block].num=='?'){return}
    for (var i=row*9;i<row*9+9;i++){
      /*A memorable bug that before debuged there is "i<=row*9+9"
      but here consideres an item in the next line which leds to not only
      fault in truth but also array index is out of bound  */
      if(nowgamedata[i].num==blocknum&&i!=block){
        wx.showToast({
          title: '出现错误',
          icon:'loading',
          duration: 500
        });
        nowgamedata[block].color='red';
        this.setData({gamedata:nowgamedata})
        console.log(i);
        return;
      }
    }/*alert when the line is wrong*/
    for (var i = column; i < 81; i+=9) {
      if (nowgamedata[i].num == blocknum && i != block) {
        wx.showToast({
          title: '出现错误',
          icon: 'loading',
          duration: 500
        });
        nowgamedata[block].color = 'red';
        this.setData({ gamedata: nowgamedata })
        console.log(10);
        return;
      }
    }/*alert when the column is wrong*/
    var strictrow=(row-row%3)/3;
    var strictcolumn=(column-column%3)/3;
    for(var i=0;i<3;i++){
      for (var j=0;j<3;j++){
        var corner=strictrow*27+strictcolumn*3;
        if ((corner + i + j * 9) != block && nowgamedata[corner + i + j * 9].num == blocknum){
          wx.showToast({
            title: '出现错误',
            icon: 'loading',
            duration: 500
          });
          nowgamedata[block].color = 'red';
          this.setData({ gamedata: nowgamedata })
          console.log(11);
          return;
        }
      }
    }/*alert when the square is wrong*/
  },
  
  checkright:function(){
    var nowgamedata=this.data.gamedata;
    for(let i in nowgamedata){
      if (nowgamedata[i].color == 'red' || nowgamedata[i].color == 'lightblue'){return;}
    }
    wx.showToast({
      title: '恭喜通关',
      icon: 'success',
      duration: 500
    });
  },

  fillblank:function(e){
    if(!this.data.inputing){return;}
    var num=e.currentTarget.dataset.index;
    console.log(num+1);
    var block=this.data.inputblock;
    var nowgamedata=this.data.gamedata;
    if (num === 9) { nowgamedata[block].num = '?'; nowgamedata[block].color = 'lightblue'}
    else{nowgamedata[block].num=num+1;nowgamedata[block].color='purple'}
    console.log(this.data.choosecolor)
    nowgamedata[block].bkc=this.data.choosecolor;
    this.setData({ gamedata: nowgamedata })
    this.setData({ inputing: false })
    this.checkwrong();
    this.checkright();
  },

  changepattern:function(){
    var nowmode = this.data.mode;
    nowmode += 1;
    this.setData({ times: 0, mode: nowmode });
    var gamematerial = this.data.gamedata;
    if (nowmode % 3 == 1) {
      gamematerial = [{ num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line1*/
        { num: 6, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 7, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line2*/
        { num: 3, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line3*/
        { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 7, color: 'black', bkc: 'lightgray' },/*line4*/
        { num: 1, color: 'black', bkc: 'lightgray' }, { num: 6, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line5*/
        { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' }, { num: 2, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line6*/
        { num: 7, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 2, color: 'black', bkc: 'white' }, { num: 4, color: 'black', bkc: 'lightgray' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: 8, color: 'black', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' },/*line7*/
        { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: 6, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' },/*line8*/
        { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 8, color: 'black', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'white' }, { num: 3, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'white' },/*line9*/];
    }
    else if (nowmode % 3 == 2) {
      gamematerial = [{ num: 4, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 3, color: 'black', bkc: 'white' }, { num: 7, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'white' }, { num: 5, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line1*/
        { num: 2, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 4, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 3, color: 'black', bkc: 'white' },/*line2*/
        { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' }, { num: 4, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' },/*line3*/
        { num: 6, color: 'black', bkc: 'lightgray' }, { num: 8, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 4, color: 'black', bkc: 'lightgray' },/*line4*/
        { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 4, color: 'black', bkc: 'lightgray' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 9, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line5*/
        { num: 9, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 8, color: 'black', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line6*/
        { num: 7, color: 'black', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line7*/
        { num: '?', color: 'lightblue', bkc: 'white' }, { num: 3, color: 'black', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 4, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' },/*line8*/
        { num: 1, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 5, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 7, color: 'black', bkc: 'white' },/*line9*/];
    }
    else {
      gamematerial = [{ num: '?', color: 'lightblue', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line1*/
      { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 2, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 8, color: 'black', bkc: 'white' },/*line2*/
      { num: 3, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 7, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line3*/
    { num: 5, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' },/*line4*/
    { num: 9, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 1, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 3, color: 'black', bkc: 'lightgray' },/*line5*/
    { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 7, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 9, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 6, color: 'black', bkc: 'lightgray' },/*line6*/
    { num: '?', color: 'lightblue', bkc: 'white' }, { num: 3, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 1, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'white' },/*line7*/
    { num: 2, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 8, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line8*/
    { num: '?', color: 'lightblue', bkc: 'white' }, { num: 5, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' }, { num: 4, color: 'black', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: '?', color: 'lightblue', bkc: 'lightgray' }, { num: 2, color: 'black', bkc: 'white' }, { num: 6, color: 'black', bkc: 'white' }, { num: '?', color: 'lightblue', bkc: 'white' },/*line9*/
];
    }
    this.setData({ gamedata: gamematerial });
    this.setData({ success: false });
  }
})
