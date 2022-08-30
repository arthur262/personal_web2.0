function threadhold(callback: Function, delay: number): Function {
  let timber: number = 0;

  return function () {
    clearTimeout(timber);

    timber = window.setTimeout(() => {
      callback();
    }, delay);
  };
}
function format(seconds: number) {
  let min:any = Math.floor(seconds / 60000) >= 10 ? Math.floor(seconds / 60000) : '0' + Math.floor(seconds / 60000);
			seconds -= 60000 * min;
			let sec:any = Math.floor(seconds / 1000) >= 10 ? Math.floor(seconds / 1000) : '0' + Math.floor(seconds / 1000);
			seconds -= 1000 * sec;
			return min + ':' + sec ;
}
export { format, threadhold };
