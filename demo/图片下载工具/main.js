
let background = null
let chapter = null
let canvas = null
var formData = Object.create(null);

function loadImage() {
  var bg = new Image();
  bg.src = require('./assets/certificate.jpeg');
  bg.crossOrigin = 'Anonymous';
  bg.onload = function (e) {
    background = bg
  };
  bg.onerror = function (e) {
    console.error(e)
  };

  var ct = new Image();
  ct.src = require('./assets/chapter.png');
  ct.crossOrigin = 'Anonymous';
  ct.onload = function (e) {
    chapter = ct
  };
  ct.onerror = function (e) {
    console.error(e)
  };

}
loadImage()

// 清空表单
window.clearForm = function () {
  var tagElements = form.getElementsByTagName('input');
  for (var j = 0; j < tagElements.length; j++) {
    tagElements[j].value = ''
  }
  document.getElementById('pic').src = ''
  console.log('清空数据')

}
// 生成
window.makePic = function (e) {
  const now = new Date()
  const tr = now.setDate(now.getDate() + 1);

  var date = new Date();
  var year = date.getFullYear();    //  返回的是年份
  var month = date.getMonth() + 1;  //  返回的月份上个月的月份，记得+1才是当月
  var day = date.getDate() + 1;
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var time = year + "-" + month + "-" + day

  document.getElementById('createdate').value = time
  let form = document.getElementById('form')
  var tagElements = form.getElementsByTagName('input');
  for (var j = 0; j < tagElements.length; j++) {
    formData[tagElements[j].id] = tagElements[j].value
  }
  let random = parseInt(Math.random() * 1000)
  document.getElementById('number').value = formData.endtime.replace(/\-/g, '') + `${random > 99 ? random : `0${random}`}`
  formData.number = document.getElementById('number').value
  draw()
  event.preventDefault();
}

// 下载
window.donloadPic = function () {
  if (canvas) {
    var imgURL = canvas.toDataURL('image/jpeg');
    var dlLink = document.createElement('a');
    dlLink.download = document.getElementById('name').value + '-' + document.getElementById('number').value;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = ['image/jpeg', dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
    alert('下载完成!')
  } else {
    alert('请先生成!')
  }
}

// 渲染canvas

function draw() {
  canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  // var dpr = window.devicePixelRatio || 1
  canvas.width = 3508
  canvas.height = 2480 
  // context.scale(dpr, dpr)
  context.drawImage(background, 0, 0, 3508, 2480);
  // context.drawImage(chapter, 2665, 1684, 500, 500);

  context.font = "normal normal 600 104px Song"
  context.fillStyle = "#2E3441"
  const x = 895 - formData.name.length * 90
  context.fillText(formData.name, x, 1420);

  context.fillText(formData.starttime, 1130, 1420);

  context.fillText(formData.endtime, 1900, 1420);

  context.fillText(formData.time, 1060, 1590);

  context.font = "normal normal 600 66px Song"

  context.fillText(formData.number, 629, 2056);
  context.fillText(formData.createdate, 629, 2162);
  var imgURL = canvas.toDataURL('image/jpeg');
  document.getElementById('pic').src = imgURL
  alert('完成!')
}

window.onload = () => {
  if (window.sessionStorage.getItem('token') == 'xl20200702') {
    document.getElementById('form').style.display = 'flex'
    return
  }
  var ret = prompt('请输入密码');
  if (ret) {
    if (ret == 'xl20200702') {
      document.getElementById('form').style.display = 'flex'
      window.sessionStorage.setItem('token', ret)
    } else {
      alert('密码错误')
      window.location.reload()
    }
  } else {
    window.location.reload()
  }
}