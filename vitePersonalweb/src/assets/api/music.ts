import axios from "axios";

const api = "https://netease-cloud-music-du42ua3bd-arthur262.vercel.app";
const location = "?realIP=27.158.4.103";
// post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.timeout = 30000;

//搜索热门歌
const songUrl = api + "/song/url/v1" + location;
const songDetail = api + "/song/detail" + location;
//获取精品歌单
const playlist_tray_list = api + "/playlist/highquality/tags" + location;
const playlist_tray = api + "/top/playlist/highquality" + location;

//获取歌词
const lyrics = api + "/lyric" + location;

//搜索特定哥
const searchByName = api + "/cloudsearch" + location;

export default {
  //搜索歌非具体
  hotSearchListFn(id: number) {
    return axios.get(songUrl, {
      params: {
        id,
        level: "standard",
      },
    });
  },
  //搜索歌更具体
  hitSearchDetail(id: number) {
    return axios.get(songDetail, {
      params: { ids: id },
    });
  },

  //获取歌词
  lyricFn(id: number) {
    return axios.get(lyrics, {
      params: {
        id,
      },
    });
  },

  //获取精品歌单
  highqualitListyTag() {
    return axios.get(playlist_tray_list);
  },

  //按字段搜索
  searchByNameFn(name: string) {
    return axios.get(searchByName, {
      params: {
        limit: 10,
        keywords: name,
      },
    });
  },

  /*
   * @param {*} limit: 取出歌单数量 , 默认为 50
   * @param {*} before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
   */
  playlist_trayFn(before: number, cat?: string, limit = 10) {
    return axios.get(playlist_tray, {
      params: {
        limit,
        before,
        cat,
      },
    });
  },
};
