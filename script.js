function digital_root(n) {
    let num = n.toString();
    if (num.length == 2) {
    let sum1 = parseInt(num[0]) + parseInt(num[1]);
    console.log(sum1);
    return sum1;
    } else if (num.length > 2) {
    let sum = 0;
    for (i = 0; i < num.length; i++) {
    sum += parseInt(num[i])}
    let num2 = sum.toString();
    let sum2 = 0;
    for (j = 0; j < num2.length; j++) {
    sum2 += parseInt(num2[j]);
     }
    let num3 = sum2.toString();
    let sum3 = 0;
    for (k = 0; k < num3.length; k++) {
    sum3 += parseInt(num3[k]);
     }
     console.log(sum3);
     return sum3;
    } else {
        return 0
    }
  }

  digital_root(16);
  //should be 7

  digital_root(456);
  //should be 6

  digital_root(942);
  //should be 6

  digital_root(132189);
  //should be 6

  digital_root(493193);
  //should be 2


