Page({
  onShareAppMessage: function () {
    return {
      title: '支教微课程',
      path: '/pages/course/maincourse'
    }
  },

  data:{
    microcourse:[
      {
        title:'1.月相图',
        coverpic:'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51W1to4Ubics3qnoIzj4mYRYyNYTQOv6FS4oia9ylHibJ4MoozAMxewb7DSUEUkbqKrYyFQfdjnnjT9XQ/0?wx_fmt=png',
        id:1,color:'darkblue',
        intro:'\n 从不同角度看月亮，得到的是不同的阴晴圆缺'
      },
      {
        title: '2.动物标本',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51VaMEsPdTxVT1xrlzvAaJcVVeiaiaNkkViccpE1qhJP8ZGBZaALeAHz684QiaqyicgrtWEgLeDU7oeVh6Q/0?wx_fmt=png',
        id: 2, color: 'darkblue',
        intro: '\n 用特殊方法处理动物后制成可长久保存的标本'
      },
      {
        title: '3.矿物标本',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51VaMEsPdTxVT1xrlzvAaJcVPPuSWtjrxp6HdeeM6PmZMGv6l0xXf5N2qbibMv3VrCsHlIrX4icpfgog/0?wx_fmt=png',
        id: 3, color: 'darkblue',
        intro: '\n 指保持了实物原样或原生状态，可供人学习、研究、观赏的矿物样本'
      },
      {
        title: '4.平面镜成像',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51VaMEsPdTxVT1xrlzvAaJcVH3JnktIr8NsHiazKD06dOcQFXjvLbbqMpkwdUQ8G7HunhbjywQicNuLA/0?wx_fmt=png',
        id: 4, color: 'darkblue',
        intro: '\n 镜子中的像，会在什么地方'
      },
      {
        title: '5.凸透镜成像',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51VaMEsPdTxVT1xrlzvAaJcVLicnE2YvcgxcqeNJGYIEoxJKmTW3NcvfpWGOdAh8hHHtGubpxgPuRfg/0?wx_fmt=png',
        id: 5, color: 'darkblue',
        intro: '\n 通过凸透镜，光屏上出现了倒立的火焰'
      },
      {
        title: '6.杠杆原理',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51VaMEsPdTxVT1xrlzvAaJcVdsLyH2ppnVNy7ib6t6WyJTOAxuynuotO85bHlpvceibj7mLxnIJ20yuA/0?wx_fmt=png',
        id: 6, color: 'darkblue',
        intro: '\n 杠杆平衡所需的条件'
      },
      {
        title: '7.电路的连接原理',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51Xwe8iarCvsM9iaebjoUs0mYnZhwmibh8vtWWemhUMOVIR0mk71NjPt9bsmwe7ibA6XgjhjZd13979ncA/0?wx_fmt=png',
        id: 7, color: 'darkblue',
        intro: '\n 电路的基本构成'
      },
      {
        title: '8.电路的串联并联',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51Xwe8iarCvsM9iaebjoUs0mYnfobWQt6386ib85hG2Aeb2hrD65LcR0QRic38K4bD9s3RpxRZ1duWwpGw/0?wx_fmt=png',
        id: 8, color: 'darkblue',
        intro: '\n 串联电路与并联电路'
      },
      {
        title: '9.电磁铁',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51Xwe8iarCvsM9iaebjoUs0mYnKfgLKibHVohdYpib5Hz80la0WCFUM7CqAl2uEic2PMaUA0WSdibRdX20tA/0?wx_fmt=png',
        id: 9, color: 'darkblue',
        intro: '\n 电磁铁是通电产生电磁的一种装置'
      },
      {
        title: '10.袋鼠下坡',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51W1to4Ubics3qnoIzj4mYRYyWj7vpWeFnPmajmicrjhbJRZ0IM3Hu3O0xu7awW18DD123QvNGyRyuWg/0?wx_fmt=png',
        id: 10, color: 'darkblue',
        intro: '\n 下压一次尾巴，袋鼠就会一跳一跳地向下运动'
      },
      {
        title: '11.地震模拟',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51W1to4Ubics3qnoIzj4mYRYyvvQsJlNbJnGKBaO4wUnXUP1jdibkQMIBg5iaSGiaVKmo9UibeIlT8NRsMQ/0?wx_fmt=png',
        id: 11, color: 'darkblue',
        intro: '\n 这是一个地震模拟器。每次摇动手柄，绿色平台就会震动'
      },
      {
        title: '12.翻滚魔丸',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51W1to4Ubics3qnoIzj4mYRYyHr1ZaEEMbkdAwibvnu2c6FvDCQwnUhUqeGSLDhRibF4d1ndzuIVJ5iceQ/0?wx_fmt=png',
        id: 12, color: 'darkblue',
        intro: '\n 这个“魔丸”在下落的过程中翻滚'
      },
      {
        title: '13.小球穿洞',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51W1to4Ubics3qnoIzj4mYRYyuRr75icUkWagkapUM0fgxBJeqxM2DoDXFI1Ts2AO6xkiaaeRicfVtWn5Q/0?wx_fmt=png',
        id: 13, color: 'darkblue',
        intro: '\n 小球从一个黑色的“隔板”正中直接穿了过去'
      },
      {
        title: '14.转动盘',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XfIPvU4R9iaUr9V0GHOrhMG8KfrdGKx7AKVHmViaykJwHarEOaEFliaNbakoFiaFrGE4qBicibGtib9HUkg/0?wx_fmt=png',
        id: 14, color: 'darkblue',
        intro: '\n 在旋转之后，转盘成为了几种颜色的混合颜色（肉眼可见白色）'
      },
      {
        title: '15.弹性球',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XfIPvU4R9iaUr9V0GHOrhMGVTv8KS5Liby0FMMEGibZJNCdI43Q6qDhYgYTVFBKUJBNzhOOqcdB35lg/0?wx_fmt=png',
        id: 15, color: 'darkblue',
        intro: '\n 拉起一个弹性球，松开，使得两个弹性球互相碰撞'
      },
      {
        title: '16.液压器',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XfIPvU4R9iaUr9V0GHOrhMGia8KPicuHDa5p2fU2YgmpHKbAZCBcWOtxCs8mg3umgwJuJKcxJOg07QA/0?wx_fmt=png',
        id: 16, color: 'darkblue',
        intro: '\n 在压下左边的杆后，右边的气筒中的平面会向上运动'
      },
      {
        title: '17.磁力',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XfIPvU4R9iaUr9V0GHOrhMGmoXyQKwRpYfbacA5oIaU6ZVyI1vU35TUEMicf5Pf93HtiaBuoGhD1OFg/0?wx_fmt=png',
        id: 17, color: 'darkblue',
        intro: '\n 小磁针随着人手中的磁体运动而运动'
      },
      {
        title: '18.显微镜装片',
        coverpic: 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51VaMEsPdTxVT1xrlzvAaJcVPczcnYpYTf5CdEJWW9yKdKp2MzPbmp7qA1phsiaZ9lkFbjUfFIc0gWg/0?wx_fmt=png',
        id: 18, color: 'darkblue',
        intro: '\n 细胞在显微镜下的形态'
      }
    ]
  },

  viewCourse:function(e){
    var Index=e.currentTarget.dataset.index;
    console.log(Index);
    var currentMicrocourse=this.data.microcourse;
    for(let i in currentMicrocourse){
      if(i==Index){
        currentMicrocourse[i].color ='darkviolet'
      }
    }
    this.setData({
      microcourse:currentMicrocourse
    })
  }
})