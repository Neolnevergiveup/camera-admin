/**
 * [Format] 返回值的类型，支持 JSON 与 XML，默认为 XML。
 * Version API 版本号为日期形式：YYYY-MM-DD。本版本对应为：2016-11-01。
 * AccessKeyId 阿里云颁发给用户的访问服务所用的密钥 ID。请登录 视频直播控制台 > Access Key 管理 进行查看。  链接https://live.console.aliyun.com/?spm=a2c4g.11186623.2.3.b9WQ76#/live/domains
 * Signature 签名结果串，关于签名的计算方法，请参见 签名机制。  https://help.aliyun.com/document_detail/50286.html?spm=a2c4g.11186623.2.4.b9WQ76
 * SignatureMethod 签名方式，目前支持 HMAC-SHA1。
 * Timestamp 请求的时间戳。日期格式按照 ISO8601 标准表示，并需要使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。例如：2014-11-11T12:00:00Z（为北京时间 2014 年 11 月 11 日 20 点 0 分 0 秒）。
 * SignatureVersion 签名算法版本，目前版本是1.0。
 * SignatureNonce 唯一随机数，用于防止网络重放攻击。用户在不同请求间要使用不同的随机数值。
 */
export class COMMON {
  Format;
  Version;
  AccessKeyId;
  SignatureMethod;
  Timestamp;
  SignatureVersion;
  SignatureNonce;
  Action;
  VideoId;
  constructor () {
    // let time = new Date();
    // let year = time.getFullYear();
    // let month = format(time.getMonth() + 1);
    // let day = format(time.getDate());
    // let hour = format(time.getHours());
    // let minutes = format(time.getMinutes());
    // let seconds = format(time.getSeconds());
    // let rom = Math.floor(Math.random() * 89999) + 10000;
    this.Format = 'JSON';
    this.Version = '2017-03-21';
    this.AccessKeyId = 'testAccessKeyId';
    this.SignatureMethod = 'HMAC-SHA1';
    // this.Timestamp = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}Z`;
    this.Timestamp = `2017-10-10T12:02:54Z`;
    this.SignatureVersion = '1.0';
    this.SignatureNonce = '8f8a035d-6496-4268-afd4-67c22837e38d';
    this.Action = 'GetVideoPlayAuth';
    this.VideoId = '5aed81b74ba84920be578cdfe004af4b';
  }
}

/**
 * 将小于10的数字补0
 */
// function format (number) {
//   if (number >= 10) {
//     return number;
//   } else {
//     return `0${number}`;
//   }
// }
