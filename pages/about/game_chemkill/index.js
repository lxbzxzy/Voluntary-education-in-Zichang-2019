Page({
  onShareAppMessage: function () {
    return {
      title: 'chemkill',
      path: '/pages/about/game_chemkill/index'
    }
  },

  cardlist:[
    { id: 11, name: 'HCl' },
    { id: 12, name: 'HNO3' },
    { id: 13, name: 'H2SO4' },
    { id: 14, name: 'HI' },
    { id: 15, name: 'HClO4' },/*0-4 */
    { id: 21, name: 'HF' },
    { id: 22, name: 'H2S' },
    { id: 23, name: 'NH4Cl' },
    { id: 24, name: 'NH4NO3' },
    { id: 31, name: 'NaOH' },/*5-9 */
    { id: 32, name: 'KOH' },
    { id: 33, name: 'Ca(OH)2' },
    { id: 34, name: 'Ba(OH)2' },
    { id: 41, name: 'NH3·H2O' },
    { id: 42, name: 'Al(OH)3' },/*10-14 */
    { id: 43, name: 'Al2O3' },
    { id: 44, name: 'NaHCO3' },
    { id: 45, name: 'Na2CO3' },
    { id: 51, name: 'Al' },
    { id: 52, name: 'CH4' },/*15-9 */
    { id: 53, name: 'Mg' },
    { id: 54, name: 'H2' },
    { id: 55, name: 'C' },
    { id: 56, name: 'P4' },
    { id: 57, name: 'S8' },/*20-24 */
    { id: 58, name: 'Zn' },
    { id: 61, name: 'O2' },
    { id: 62, name: 'H2O' },
    { id: 63, name: 'CO2' },
    { id: 64, name: 'P2O5' },/*25-29 */
    { id: 65, name: 'NO' },
    { id: 66, name: 'NO2' },
    { id: 67, name: 'SiO2' },
    { id: 68, name: 'CuO' },
    { id: 71, name: 'KMnO4' },/*30-34 */
    { id: 72, name: 'K2Cr2O7' },
    { id: 73, name: 'NaClO' },
    { id: 81, name: 'H2O2' },
    { id: 82, name: 'NaHSO3' },
    { id: 83, name: 'Na2O2' },/*35-39 */
    { id: 84, name: 'Na2S' },
    { id: 85, name: 'FeSO4' },
  ],

  rulelist:[
    { card1: 11, card2: 0, answer: [31, 32, 33, 34, 41, 42, 43, 44, 45, 51, 53, 58, 68], result: '', hp: 1 }, { card1: 13, card2: 0, answer: [31, 32, 33, 34, 41, 42, 43, 44, 45, 51, 53, 58, 68, 73, 83], result: '', hp: 1 }, { card1: 14, card2: 0, answer: [31, 32, 33, 34, 41, 42, 43, 44, 45, 51, 53, 58, 68, 73, 83], result: '', hp: 1 }, { card1: 12, card2: 0, answer: [31, 32, 33, 34, 41, 42, 43, 44, 45, 68, 73], result: '', hp: 1 }, { card1: 15, card2: 0, answer: [31, 32, 33, 34, 41, 42, 43, 44, 45, 68, 73], result: '', hp: 1 },
    { card1: 31, card2: 0, answer: [11, 12, 13, 14, 15, 21, 22, 23, 24, 42, 43, 44, 51, 57, 58, 63, 64, 66, 67, 72, 82, 85], result: '', hp: 1 }, { card1: 32, card2: 0, answer: [11, 12, 13, 14, 15, 21, 22, 23, 24, 42, 43, 44, 51, 57, 58, 63, 64, 66, 67, 72, 82, 85], result: '', hp: 1 }, { card1: 33, card2: 0, answer: [11, 12, 13, 14, 15, 21, 22, 23, 24, 42, 43, 44, 51, 57, 58, 63, 64, 66, 67, 72, 82, 85], result: '', hp: 1 }, { card1: 34, card2: 0, answer: [11, 12, 13, 14, 15, 21, 22, 23, 24, 42, 43, 44, 51, 57, 58, 63, 64, 66, 67, 72, 82, 85], result: '', hp: 1 }, { card1: 61, card2: 51, answer: [42, 62, 63], result: '燃烧', hp: 2},
    { card1: 61, card2: 52, answer: [42, 62, 63], result: '燃烧', hp: 2 }, { card1: 61, card2: 53, answer: [42, 62, 63], result: '燃烧', hp: 2 }, { card1: 61, card2: 54, answer: [42, 62, 63], result: '燃烧', hp: 2 }, { card1: 61, card2: 55, answer: [42, 62, 63], result: '燃烧', hp: 2 }, { card1: 61, card2: 56, answer: [42, 62, 63], result: '燃烧', hp: 2 }, { card1: 61, card2: 57, answer: [42, 62, 63], result: '燃烧', hp: 2},
    { card1: 61, card2: 58, answer: [42, 62, 63], result: '燃烧', hp: 2 }, { card1: 65, card2: 0, answer: [83], result: '', hp: 2 }, { card1: 66, card2: 0, answer: [31, 32, 33, 34, 41, 44, 45, 85], result: '', hp: 2 }, { card1: 23, card2: 31, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 23, card2: 32, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 },
    { card1: 23, card2: 33, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 23, card2: 34, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 23, card2: 44, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 23, card2: 45, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 23, card2: 84, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2},
    { card1: 24, card2: 31, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 24, card2: 32, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 24, card2: 33, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 24, card2: 34, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 24, card2: 44, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2},
    { card1: 24, card2: 45, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 24, card2: 84, answer: [11, 12, 13, 14, 15, 21, 22, 62, 65, 66, 82, 85], result: 'NH3', hp: 2 }, { card1: 12, card2: 51, answer: [83], result: 'NO', hp: 2 }, { card1: 12, card2: 53, answer: [83] }, { card1: 12, card2: 58, answer: [83], result: 'NO', hp: 2 }, { card1: 12, card2: 82, answer: [83], result: 'NO', hp: 2},
    { card1: 12, card2: 84, answer: [83], result: 'NO', hp: 2 }, { card1: 55, card2: 12, answer: [31, 32, 33, 34, 41, 44, 45], result: 'NO2', hp: 2 }, { card1: 57, card2: 12, answer: [31, 32, 33, 34, 41, 44, 45], result: 'NO2与SO2', hp: 2 }, { card1: 67, card2: 21, answer: [31, 32, 33, 34, 41, 44, 45, 62], result: 'SiF4', hp: 2 }, { card1: 71, card2: 11, answer: [31, 32, 33, 34, 41, 44, 45, 84, 85], result: 'Cl2', hp: 2 },
    { card1: 72, card2: 11, answer: [31, 32, 33, 34, 41, 44, 45, 84, 85], result: 'Cl2', hp: 2 }, { card1: 73, card2: 11, answer: [31, 32, 33, 34, 41, 44, 45, 84, 85], result: 'Cl2', hp: 2 }, { card1: 82, card2: 11, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'SO2', hp: 2 }, { card1: 82, card2: 13, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'SO2', hp: 2 }, { card1: 82, card2: 14, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'SO2', hp: 2},
    { card1: 82, card2: 21, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'SO2', hp: 2 }, { card1: 84, card2: 13, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'H2S', hp: 2 }, { card1: 84, card2: 14, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'H2S', hp: 2 }, { card1: 84, card2: 21, answer: [31, 32, 33, 34, 41, 44, 45, 84], result: 'H2S', hp: 2 }, { card1: 56, card2: 31, answer: [71, 72, 73, 14, 81], result: 'PH3', hp: 2 },
    { card1: 56, card2: 32, answer: [71, 72, 73, 14, 81], result: 'PH3', hp: 2 }, { card1: 56, card2: 33, answer: [71, 72, 73, 14, 81], result: 'PH3', hp: 2 }, { card1: 56, card2: 34, answer: [71, 72, 73, 14, 81], result: 'PH3', hp: 2 }
  ],

  pilelist: [4, 1, 27, 26, 3, 0, 26, 35, 19, 36,/**/27,20,26,36,31,24,21,28,16,1,/**/27,13,13,0,0,26,0,30,25,9,/**/0,13,13,27,9,29,38,40,24,13,/**/13,38,9,1,24,27,28,0,26,9,/**/1,5,34,9,2,13,2,18,0,38,/**/17,9,0,41,10,26,40,1,13,13,/**/1,1,12,15,7,17,1,1,11,37,/**/39,26,23,5,5,34,14,39,0,1,/**/13,0,1,13,35,27,20,32,7,6,/**/0,21,1,34,13,38,33,17,38,8,/**/13,1],

  data: {
    rule:'chemkill游戏规则：通过使用化学物质造成伤害，血量小于等于0时被淘汰。伤害方式：强酸强碱：伤害为1；燃烧、有毒气体：伤害为2。抵御伤害的方式：使强酸强碱有毒气体转化为不具有上述性质的物质',
    hp_of_the_computer:5,
    hp_of_the_player:6,
    num_card_computer:0,
    num_card_player:0,

    totalcard:0,
    battleline0: '',
    battleline1:'',
    battleline2: '',
    comcard:[
      { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }
    ],
    yourcard: [
      { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' }, { id: 0, name: '' },{ id: 0, name: '' }
    ],
    comusecard:[9,9],
    youusecard:[9,9],
    comanswercard:9,
    youanswercard:9, 
    comloseblood: 0,
    youloseblood: 0,
    comturn:true, 
    comround:true,
    win:false,
    lose:false,
    ruleset:0
  },

  sleep:function(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while(true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },
  
  getcard:function(){
    var totalCard=this.data.totalcard%112;
    if(this.data.comturn){
      var thiscard=this.data.comcard;
      var numcard=this.data.num_card_computer;
    }
    else{
      var thiscard = this.data.yourcard;
      var numcard = this.data.num_card_player;
    }
    thiscard[numcard]=this.cardlist[this.pilelist[totalCard]];
    totalCard++;
    this.setData({totalcard:totalCard})
    numcard++;
    if (this.data.comturn) {
      this.setData({num_card_computer:numcard,comcard:thiscard})
    }
    else {
      this.setData({ num_card_player: numcard, yourcard: thiscard })
    }
  },
  
  com_use_1card:function(){
    console.log('comuse1');
    var comuse=this.data.comusecard[0];
    console.log(comuse);
    var name=this.data.comcard[comuse].name;
    this.setData({battleline1:'电脑对你使用了'+name+'请问你是否应答'})
    var numCardComputer=this.data.num_card_computer;
    numCardComputer-=1;
    var com_card=this.data.comcard;
    this.setData({ num_card_computer:numCardComputer})
    for(var j=comuse;j<=numCardComputer;j++){
      com_card[j]=com_card[j+1];
    }
    this.setData({comcard:com_card})
  },

  com_use_2cards:function(){
    console.log('comuse2');
    var comuse = this.data.comusecard;
    var name1 = this.data.comcard[comuse[0]].name;
    var name2 = this.data.comcard[comuse[1]].name;
    console.log(comuse[0]); console.log(comuse[1]);
    /*a bug here where the first item of the array is 0!!!!!!!!!! */
    var react=this.rulelist[this.data.ruleset].result;
    this.setData({ battleline1: '电脑对你使用了' + name1 + '和' +name2+'生成'+react+ '请问你是否应答' })
    var numCardComputer = this.data.num_card_computer;
    numCardComputer -= 2;
    var com_card = this.data.comcard;
    this.setData({ num_card_computer: numCardComputer })
    var big=0,small=0;
    if(comuse[0]>comuse[1]){big=comuse[0];small=comuse[1];}
    else{ small = comuse[0]; big = comuse[1]; }
    /*三目运算符不靠谱！！！！在js中变量类型并不确定 返回的未必是数值 */
    console.log(big);console.log(small);
    for (var j =big; j<= 8; j++){
      com_card[j] = com_card[j+1];
    }
    for (var j=small; j<=8; j++) {
      com_card[j] = com_card[j+1];
    }
    this.setData({ comcard: com_card })
  },

  you_use_1card: function () {
    var youuse = this.data.youusecard[0];
    var name = this.data.yourcard[youuse].name;
    this.setData({ battleline1: '你对电脑使用了' + name  })
    var numCardPlayer = this.data.num_card_player;
    numCardPlayer -= 1;
    var your_card = this.data.yourcard;
    this.setData({ num_card_player: numCardPlayer })
    for (var j = youuse; j <= numCardPlayer; j++) {
      your_card[j] = your_card[j + 1];
    }
    this.setData({ yourcard: your_card })
  },

  you_use_2cards: function () {
    var youuse = this.data.youusecard;
    var name1 = this.data.yourcard[youuse[0]].name;
    var name2 = this.data.yourcard[youuse[1]].name;
    this.setData({ battleline1: '你对电脑使用了' + name1 + '和' + name2  })
    var numCardPlayer = this.data.num_card_player;
    numCardPlayer -= 2;
    var your_card = this.data.yourcard;
    this.setData({ num_card_player: numCardPlayer})
    var big = 0, small = 0;
    if (youuse[0] > youuse[1]) { big = youuse[0]; small = youuse[1]; }
    else { small = youuse[0]; big = youuse[1]; }
    for (var j = big; j <= numCardPlayer + 3; j++) {
      your_card[j] = your_card[j + 1];
    }
    for (j = small; j <= numCardPlayer + 2; j++) {
      your_card[j] = your_card[j + 1];
    }
    this.setData({ yourcard: your_card })
  },

  com_answer_card:function(){
    var comuse = this.data.comanswercard;
    var name = this.data.comcard[comuse].name;
    this.setData({ battleline2: '电脑打出了' + name })
    var numCardComputer = this.data.num_card_computer;
    numCardComputer -= 1;
    var com_card = this.data.comcard;
    this.setData({ num_card_computer: numCardComputer })
    for (var j = comuse; j <= numCardComputer; j++) {
      com_card[j] = com_card[j + 1];
    }
    this.setData({ comcard: com_card })
  },
  
  you_answer_card:function(){
    var youuse = this.data.youanswercard;
    var name = this.data.yourcard[youuse].name;
    this.setData({ battleline2: '你打出了' + name })
    var numCardPlayer = this.data.num_card_player;
    numCardPlayer -= 1;
    var your_card = this.data.yourcard;
    this.setData({ num_card_player: numCardPlayer })
    for (var j = youuse; j <= numCardPlayer; j++) {
      your_card[j] = your_card[j + 1];
    }
    this.setData({ yourcard: your_card })
  },
  
  com_lose_blood:function(){
    var comLoseBlood=this.data.comloseblood;
    this.setData({battleline2:'电脑损失'+comLoseBlood+'点体力'})
    var comhp=this.data.hp_of_the_computer;
    comhp-=comLoseBlood;
    this.setData({hp_of_the_computer:comhp})
    if(comhp<=0){
      this.setData({win:true})
      wx: wx.showToast({
        title: '你赢了',
        icon: 'success',
        duration: 3000,
      })
    }
  },

  you_lose_blood: function () {
    var youLoseBlood = this.data.youloseblood;
    this.setData({ battleline2: '你损失了' + youLoseBlood + '点体力' })
    var yourhp = this.data.hp_of_the_player;
    yourhp -= youLoseBlood;
    this.setData({ hp_of_the_player: yourhp })
    if (yourhp <= 0) {
      this.setData({ lose: true })
      wx:wx.showToast({
        title: '你输了',
        icon: 'loading',
        duration: 3000,
      })
    }
  },
  
  gamestart:function(){
    var time=new Date().getSeconds();
    this.setData({totalcard:time})
    for(var i=1;i<=4;i++){this.getcard();}
    this.setData({comturn:false})
    for(var i=1;i<=5;i++){this.getcard();}
    this.setData({comturn:true})
  },

  comround:function(){
    this.sleep(800);
    this.setData({comround:true})
    var serial=0;
    this.setData({battleline2:''})
    while(serial<=this.data.num_card_computer&&!this.data.lose){
      for(var methodnum=0;methodnum<this.rulelist.length;methodnum++){
        if (this.data.comcard[serial].id === this.rulelist[methodnum].card1 && this.rulelist[methodnum].card2===0){
          this.setData({comusecard:[serial,0],ruleset:methodnum})
          console.log(serial);
          this.com_use_1card();
          this.setData({ comround: false });return;
        }
        if (this.data.comcard[serial].id === this.rulelist[methodnum].card1 && this.rulelist[methodnum].card2 != 0) {
          for(var serial2=0;serial2<this.data.num_card_computer;serial2++){
            if(this.data.comcard[serial2].id===this.rulelist[methodnum].card2){
              this.setData({ comusecard: [serial, serial2], ruleset: methodnum})
              this.com_use_2cards();
              this.setData({ comround: false });return;
            }
          }
        }
      }
      serial++;
    }
    this.setData({ comround: false,comturn:false,battleline0:'',battleline1:'',battleline2:'' });
    this.sleep(200);
    this.setData({ battleline0:'你的回合开始 你摸取三张牌'})
    for(var i=0;i<3;i++){this.getcard();}
  },

  onLoad:function(){
    this.gamestart();
    this.setData({ comturn: true, battleline0: '电脑的回合开始 电脑摸三张牌' })
    for (var i = 1; i <= 3; i++) { this.getcard(); }
    this.comround();
  },

  youuse:function(e){
    if(this.data.comround){return;}
    var index=e.currentTarget.dataset.index;
    console.log(index);
    if(this.data.comturn){
      this.setData({youanswercard:index})
    }
    else{
      if(index>=this.data.num_card_player){return;}
      if (this.data.youusecard[0] == 9 && this.data.youusecard[1] == 9){
        this.setData({youusecard:[index,9]})
      }
      else if (this.data.youusecard[0] != 9 && this.data.youusecard[1] == 9) {
        var first=this.data.youusecard[0];this.setData({ youusecard: [first, index] })
      }
      else if (this.data.youusecard[0] != 9 && this.data.youusecard[1] != 9) {
        var second = this.data.youusecard[1]; this.setData({ youusecard: [index,second] })
      }
      console.log('1st'+this.data.youusecard[0]); console.log('2nd'+this.data.youusecard[1]);
    }
  },
  
  choicedone:function(){
    if (this.data.comround) { return; }
    if (this.data.win||this.data.lose) { return; }
    if(this.data.comturn){
      var array=this.rulelist[this.data.ruleset].answer;
      for (var i=0;i<array.length;i++){
        if(this.data.yourcard[this.data.youanswercard].id===array[i]){
          this.you_answer_card();this.comround();return;
        }
      }
      wx.showToast({
        title: '请重新出牌',
        icon: 'loading',
        duration: 1000,
      })
    }
    else{
      console.log('yourturn');
      if (this.data.youusecard[0] == 9 && this.data.youusecard[1] == 9) {
        wx.showToast({
          title: '请重新出牌',
          icon: 'loading',
          duration: 1000,
        })
        console.log(1001);
      }
      else if (this.data.youusecard[0] != 9 && this.data.youusecard[1] == 9){
        var useid = this.data.yourcard[this.data.youusecard[0]].id;
        console.log(useid);
        for(var a=0;a<this.rulelist.length;a++){
          if (useid == this.rulelist[a].card1 && this.rulelist[a].card2==0){
            this.you_use_1card();
            for(var b=0;b<this.data.num_card_computer;b++){
              for(var c=0;c<this.rulelist[a].answer.length;c++){
                if(this.data.comcard[b].id==this.rulelist[a].answer[c]){
                  this.setData({ comanswercard: b, youusecard: [9, 9]});
                  this.com_answer_card();return;
                }
              }
            }
            this.setData({comloseblood:this.rulelist[a].hp,youusecard:[9,9]});
            this.com_lose_blood();return;
          }
        }
        wx.showToast({
          title: '请重新出牌',
          icon: 'loading',
          duration: 1000,
        })
        console.log(1002);
        this.setData({ youusecard: [9, 9] });return;
      }
      else if (this.data.youusecard[0] != 9 && this.data.youusecard[1] != 9) {
        var useid1 = this.data.yourcard[this.data.youusecard[0]].id;
        var useid2 = this.data.yourcard[this.data.youusecard[1]].id;
        if(useid1==0||useid2==0){
          wx.showToast({
            title: '请重新出牌',
            icon: 'loading',
            duration: 1000,
          })
          console.log(1003);
          this.setData({ youusecard: [9, 9] }); return;
        }
        for (var a = 0; a < this.rulelist.length; a++) {
          if ((useid1 == this.rulelist[a].card1 && this.rulelist[a].card2 == useid2) || (useid2 == this.rulelist[a].card1 && this.rulelist[a].card2 == useid1))  {
            this.you_use_2cards();
            for (var b = 0; b < this.data.num_card_computer; b++) {
              for (var c = 0; c < this.rulelist[a].answer.length; c++) {
                if (this.data.comcard[b].id == this.rulelist[a].answer[c]) {
                  this.setData({ comanswercard: b, youusecard: [9, 9]}); 
                  this.com_answer_card(); return;
                }
              }
            }
            this.setData({ comloseblood: this.rulelist[a].hp, youusecard: [9, 9] });
            this.com_lose_blood(); return;
          }
        }
        wx.showToast({
          title: '请重新出牌',
          icon: 'loading',
          duration: 1000,
        })
        this.setData({ youusecard: [9, 9] });
      }
    }
  },

  nosendcard:function(){
    if (this.data.win || this.data.lose) { return; }
    if (this.data.comround) { return; }
    console.log('nocard');
    if(this.data.comturn){
      var losehp=this.rulelist[this.data.ruleset].hp;
      console.log(losehp);
      this.setData({youloseblood:losehp})
      this.you_lose_blood();
      if(!this.data.lose){
        this.comround();
      }
    }
    else{
      this.setData({comturn:true,youusecard:[9,9]})
      this.setData({ comturn: true, battleline0: '电脑的回合开始 电脑摸三张牌' })
      for (var i = 1; i <= 3; i++) { this.getcard(); }
      this.comround();
    }
  }
})
