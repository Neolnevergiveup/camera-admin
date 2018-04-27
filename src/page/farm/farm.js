import axios from 'axios';
import qs from 'qs';
// let qs = require('qs');
export default {
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      tableData5: [{
        product_id: '1',
        uid: 'ZZZZ-614131-CBABD',
        mac: '00fc67e14dd3'
      }]
    };
  },
  methods: {
    handleClick (row) {
      console.log(row);
    }
  },
  components: {
  },
  mounted: function () {
    let params = new URLSearchParams();
    params.append('deviceid', 'c84417000026');
    axios.post('http://user.hddvs.net:8080/apiv2/CheckDeviceRtmpActionNoAuth.php', params).then(response => {
      console.log(1);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
    let xmlhttp;
    if (window.XMLHttpRequest) {
      // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        console.log(2);
        console.log(JSON.parse(xmlhttp.responseText));
      }
    }
    xmlhttp.open('POST', 'http://user.hddvs.net:8080/apiv2/CheckDeviceRtmpActionNoAuth.php', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('deviceid=c84417000026');
  }
};
