function sum(a, b, c, d, e, f) {
  cbSum(a, b, function (hap) {
    cbSum(hap, c, function (hap) {
      cbSum(hap, d, function (hap) {
        cbSum(hap, e, function (hap) {
          console.log(hap + f);
        });
      });
    });
  });
}
async function sum2(a, b, c, d, e, f) {
  let r1 = await asyncSum(a, b);
  let r2 = await asyncSum(r1, c);
  let r3 = await asyncSum(r2, d);
  let r4 = await asyncSum(r3, e);
  let r5 = await asyncSum(r4, f);
  console.log(r5);
  return r5;
}

function cbSum(a, b, cb) {
  setTimeout(function () {
    cb(a + b);
  }, 1000);
}

function asyncSum(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}
sum(1, 2, 3, 4, 5, 6);
sum2(1, 2, 3, 4, 5, 6);
console.log("Hello");
