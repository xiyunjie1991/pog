 export function findIndex(ary, fn) {
    if (ary.findIndex) {
      return ary.findIndex(fn)
    }
    /* istanbul ignore next */
    let index = -1
    /* istanbul ignore next */
    ary.some(function (item, i, ary) {
      const ret = fn.call(this, item, i, ary)
      if (ret) {
        index = i
        return ret
      }
    })
    /* istanbul ignore next */
    return index
  }
  //获取时间距离现在 多少天的字符串
  export function getDateStr(time){
    var curTime = new Date();
    //var timeDiff = curTime.getTime() - postTime.getTime();
    //上面一行代码可以换成以下（兼容性的解决）
    var timeDiff = curTime.getTime() - time * 1000;

    // 单位换算
    var min = 60 * 1000;
    var hour = min * 60;
    var day = hour * 24;
    var week = day * 7;
    var month =  week*4;
    var year = month*12;

    // 计算发布时间距离当前时间的周、天、时、分
    var  exceedyear = Math.floor(timeDiff/year);
    var exceedmonth = Math.floor(timeDiff/month);
    var exceedWeek = Math.floor(timeDiff/week);
    var exceedDay = Math.floor(timeDiff/day);
    var exceedHour = Math.floor(timeDiff/hour);
    var exceedMin = Math.floor(timeDiff/min);

    
    // 最后判断时间差到底是属于哪个区间，然后return

    if(exceedyear<100&&exceedyear>0){
        return exceedyear + '年前';
        }else{
        if(exceedmonth<12&&exceedmonth>0){
            return exceedmonth + '月前';
            }else{
            if(exceedWeek<4&&exceedWeek>0){
                return exceedWeek + '星期前';
                }else{
                if(exceedDay < 7 && exceedDay > 0){
                    return exceedDay + '天前';
                    }else {
                    if (exceedHour < 24 && exceedHour > 0) {
                        return exceedHour + '小时前';
                    } else {
                        return exceedMin + '分钟前';
                    }
                }
                }
            }
        }
  }

  