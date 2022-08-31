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
			return min + ':' + sec ;
}



//将歌词从sting转化为时间和歌词对应的格式
function anlylyrics(...el:Array<any>){
  interface data{
    time:string, 
    word:string,
  }
  let el2:Array<any>=el[0];
  const gettime=/\d+\W\d+/;
  const getword=/](\D+)/;

  for (let i=0; i<el2.length-1; i++){
    var temp:string=el2[i];
    let result:data={
      time:gettime.exec(temp)[0],
      word:getword.exec(temp)[0]
    }
    el2[i]=result;
  }
  return el2;
}

export { format, threadhold,anlylyrics };
