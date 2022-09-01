//防抖
function threadhold(callback: Function, delay: number): Function {
  let timber: number = 0;

  return function () {
    clearTimeout(timber);

    timber = window.setTimeout(() => {
      callback();
    }, delay);
  };
}
//将毫秒数据转为 分:秒到格式
function format(seconds: number) {
  let min:any = Math.floor(seconds / 60000) >= 10 ? Math.floor(seconds / 60000) : '0' + Math.floor(seconds / 60000);
			seconds -= 60000 * min;
			let sec:any = Math.floor(seconds / 1000) >= 10 ? Math.floor(seconds / 1000) : '0' + Math.floor(seconds / 1000);
			seconds -= 1000 * sec;
			return min + ':' + sec; 
}
//将分:秒反向转换到毫秒
function back_format(seconds: string) {
  var temp=seconds.split(":");
  var Millseconds=temp[1].split(".");
  return Number(temp[0])*60000+ Number(Millseconds[0])*1000+Number(Millseconds[1])%10;
}



//将歌词从sting转化为时间和歌词对应的格式
function anlylyrics(...el:Array<any>){
  interface data{
    time:string, 
    word:string,
  }
  let el2:Array<any>=el[0];
  const gettime=/\d+\W\d+\W\d+/;
  const getword=/](\D+)/;
  // console.log(back_format(gettime.exec(el2[0])[0]));

  for (let i=0; i<el2.length-1; i++){
    var temp:string=el2[i];
    let result:data={
      //将时间重新转回以毫秒%10的进制
      time:""+back_format(gettime.exec(temp)[0]),
      word:getword.exec(temp)[1]
    }
    el2[i]=result;
  }
  return el2;
}

export { format, threadhold,anlylyrics,back_format };
