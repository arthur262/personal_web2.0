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
//Convert millisecond  to minute,seconds; 
function format(seconds: number) {
  let min: any =
    Math.floor(seconds / 60000) >= 10
      ? Math.floor(seconds / 60000)
      : "0" + Math.floor(seconds / 60000);
  seconds -= 60000 * min;
  let sec: any =
    Math.floor(seconds / 1000) >= 10
      ? Math.floor(seconds / 1000)
      : "0" + Math.floor(seconds / 1000);
  seconds -= 1000 * sec;
  return min + ":" + sec;
}
//Reverse converts minutes,seconds to milliseconds
function back_format(seconds: string) {
  var temp = seconds.split(":");
  var Millseconds = temp[1].split(".");
  return (
    Number(temp[0]) * 60000 +
    Number(Millseconds[0]) * 1000 +
    (Number(Millseconds[1]) % 10)
  );
}

//Convert the lyrics from STING to the format corresponding to the time and lyrics
function anlylyrics(...el: Array<any>) {
  interface data {
    time: string;
    word: string;
  }
  let el2: Array<any> = el[0];
  const gettime = /\d+\W\d+\W\d+/;
  const getword = /](\D+)/;
  // console.log(back_format(gettime.exec(el2[0])[0]));

  for (let i = 0; i < el2.length - 1; i++) {
    var temp: string = el2[i];
    let result: data = {
      //Returns the time to %10 milliseconds
      time: "" + back_format(gettime.exec(temp)[0]),
      word: getword.exec(temp)[1],
    };
    el2[i] = result;
  }
  return el2;
}

function setword() {
  var welcomeText =
    "class Introduce { <br> " +
    " &nbsp; " +
    " constructor() { <br>" +
    " &nbsp; &nbsp;" +
    "this.English_name = 'Arthur';<br> " +
    " &nbsp; &nbsp;" +
    "this.Job = 'Frontend Devlop';<br>" +
    " &nbsp; &nbsp;" +
    "this.AtudyArea = 'Animation';<br>" +
    " &nbsp; " +
    "} <br> }";
  var n = 1;
  var timer = setInterval(() => {
    var text = welcomeText.substring(n, n + 1);
    if (document.getElementById("hello") == null) {
      //if user change the website then it should be cleaned;
      clearInterval(timer);
    } else {
      if (text == "&") {
        n += 5;
        document.getElementById("hello").innerHTML = welcomeText.substring(
          0,
          n
        );
      } else if (text == "<") {
        n += 3;
        document.getElementById("hello").innerHTML = welcomeText.substring(
          0,
          n
        );
      } else {
        document.getElementById("hello").innerHTML = welcomeText.substring(
          0,
          n
        );
      }
      if (n === welcomeText.length) {
        clearInterval(timer);
      }
      n++;
    }
  }, 50);
}

export { setword, format, threadhold, anlylyrics, back_format };
