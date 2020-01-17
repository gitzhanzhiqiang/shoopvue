export function parseTime(time, cFormat) {


    if (arguments.length === 0) {
        return null;
    }
    if (time === undefined || time === null)
        return '';

    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time == 'object') {
        date = time;
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;

        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    return time_str;
}
export function formatMoney(value) {
    if (value) {
        return (value / 100).toFixed(2);
    } else {
        return '0.00';
    }
}
export function forma(value) {
    console.log(value)
    if (value) {
        return (value * 100).toFixed(2);
    } else {
        return '0.0';
    }
}
export function forma1(value) {
    if (value) {
        return value.toFixed(1);
    } else {
        return '0.0';
    }
}
export function forma2(value) {
    if (value) {
        return value.toFixed(2);
    } else {
        return '0.00';
    }
}
export function formatTime(value, that, params, startName, endName) {
    if (value) {
        let start = value.match(/(\S*)至/)[1];
        let end = value.match(/至(\S*)/)[1];
        if (params) {
            that[params][startName] = start;
            that[params][endName] = end;
        } else {
            that[startName] = start;
            that[endName] = end;
        }
    } else {
        if (params) {
            that[params][startName] = '';
            that[params][endName] = '';
        } else {
            that[startName] = '';
            that[endName] = '';
        }
    }
}
export function getAge(identityCard) {
    if (identityCard) {
        var len = (identityCard + "").length;
        if (len == 0) {
            return 0;
        } else {
            if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
            {
                return 0;
            }
        }
        var strBirthday = "";
        if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
        {
            strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
        }
        if (len == 15) {
            strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
        }
        //时间字符串里，必须是“/”
        var birthDate = new Date(strBirthday);
        var nowDateTime = new Date();
        var age = nowDateTime.getFullYear() - birthDate.getFullYear();
        //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
        if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    } else {
        return '';
    }

}

export function phoneFilter(val) {
    if (val && val != null) {
        return val.substr(0, 3) + "****" + val.substr(7);
    } else {
        return '';
    }
}


/*将100000转为100,000.00形式*/
export function dealMoney(money) {
    console.log(money)
    if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join(',').split('').reverse().join('') + right;
    } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.00';
    } else {
        return "";
    }
};
/*将100,000.00转为100000形式*/
export function undoMoney(money) {
    if (money && money != null) {
        money = String(money);
        var group = money.split('.');
        var left = group[0].split(',').join('');
        return Number(left + "." + group[1]);
    } else {
        return "";
    }
};
// 订单价格和运费
export function goodPriceTotalFilter(orderMoney,fee) {
    // console.log("orderMoney===",orderMoney,"==fee",fee);
    if(fee && orderMoney){
        return orderMoney+fee;
    }else{
        return "0.00"
    }
};
// 字符串截取(调用each得不到所要截取的值， ajax顺序)
export  function nameSubstring(str) {
      if (str.length > 23) {
           return str.substring(0, 23) + '...';
      } else {
           return str;
      }
 }
// 交易明细中的交易状态转换
export  function accountMoneyTypeFilter(str) {
      switch (str) {
            case 1:
                types = '资金提现';
                break;
            case 2:
                types = '资金充值';
                break;
            case 3:
                types = '季度分润';
                break;
            case 4:
                types = '退款';
                break;
        }
        return types;
 }
 //倒计时6小时
 export function time(time) {
     var createTime = new Date(time.replace(/-/g, "/"));
     var now = new Date();
     var totalSeconds = parseInt((now - createTime) / 1000);
     //剩余时间
     var restTime = 6 * 60 * 60 - totalSeconds;
     if (restTime > 0) {
          // 取模（余数）
          var modulo = restTime % (60 * 60 * 24);
          // 小时数
          var hours = Math.floor(modulo / (60 * 60));
          modulo = modulo % (60 * 60);
          // 分钟
          var minutes = Math.floor(modulo / 60);
          // 秒
          var seconds = modulo % 60;
          // 输出到页面
          if (hours != 0 && hours > 0) {
               return "还剩" + hours + "时" + minutes + "分" + seconds + "秒";
          } else if (hours == 0 && minutes != 0 && minutes > 0) {
               return "还剩" + minutes + "分" + seconds + "秒";
          } else if (minutes == 0 && seconds > 0) {
               return "还剩" + seconds + "秒";
          } else {
               return 0;
          }
     } else {
          return 0;
     }

}
// 银行卡只显示后四位
 export function bankCardHide(cardNumber){
     if(cardNumber.length<4){
         return;
     }
     return  cardNumber.substring(cardNumber.length-4,cardNumber.length);
 }






