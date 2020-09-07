const news = [{
    id: '356412',
    title: '特写： 2019， 天安门城楼前的中国',
    poster: 'http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg',
      add_date: '2019 - 10 - 01',
    content: '对于普通民众而言， 一场阅兵式， 军事装备展示无疑最令人期待。 这个昔日饱经炮火、 战乱洗礼的民族， 此刻正在集中向世界展示70年来国家的发展进步。\n习近平曾说，“ 我经常看中国近代的一些史料， 一看到落后挨打的悲惨场景就痛彻肺腑！” 谈及百余年前的甲午战争,他称之为“剜心之痛”。'
  },
  {
    id: '546734',
    title: '中国成功发射高分十号卫星 主要用于国土普查、 防灾减灾等领域',
    poster: 'http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg',
      add_date: '2019 - 10 - 05',
    content: '中新网北京10月5日电(郭超凯 赵金龙) 北京时间10月5日2时51分， 中国在太原卫星发射中心用长征四号丙运载火箭， 成功将高分十号卫星发射升空， 卫星顺利进入预定轨道， 任务获得圆满成功。\n高分十号卫星是高分辨率对地观测系统国家科技重大专项安排的微波遥感卫星， 地面像元分辨率最高可达亚米级， 主要用于国土普查、 城市规划、 土地确权、 路网设计、 农作物估产和防灾减灾等领域， 可为“ 一带一路” 等国家重大战略实施和国防现代化建设提供信息保障。'
  },
  {
    id: '239875',
    title: '记者手记： 国家庆典， 每个人都是记录者',
    poster: 'http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg',
      add_date: '2019 - 10 - 01',
    content: '10 月1日凌晨3时， 大批中外记者先后乘坐巴士， 向天安门方向出发。\n仍处于夜幕中的北京， 多数市民正在享受难得的假期时光。 此刻长安街上的安静， 将与7个小时后形成巨大反差。\n作为今年中国官方举行的重要活动—— 新中国成立70周年庆典， 吸引了4700余名中外记者报名采访。 被外界誉为“ 站在世界版图前的中国”， 70 年后发展坐标定向何方， 本身自带足够吸引力。'
  }
]

//  获取新闻列表
function getNewList(){
  let list = [];
  for(var i=0;i<news.length;i++){
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.content = news[i].content;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list;
}

// 获取新闻内容
function getNewsDetail(newsID){
  let message = {
    code:'404',
    news:{}
  };
  for(var i=0;i<news.length;i++){
    if(newsID == news[i].id){
      message.code = '200';
      message.news = news[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getNewList : getNewList,
  getNewsDetail : getNewsDetail
}