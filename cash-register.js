  const denom = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];


function checkCashRegister(price, cash, cid) {
  let changeArr = [];
  let change = cash - price;


  let closed = true;

  let i = denom.length - 1;
  while (change > 0 && i >= 0) {

    const currentKey = denom[i][0];
    const currentValue = denom[i][1];

    if (currentValue <= change) {
      const num = Math.floor(change / currentValue);

      let toSubtract;

      if (num <= cid[i][1] / currentValue){
				toSubtract = num * currentValue;
			} 
			else {
				toSubtract = cid[i][1];
			}

			//two digits after the decimal place 
      change = (change - toSubtract).toFixed(2);
      cid[i][1] = (cid[i][1] - toSubtract).toFixed(2);
      changeArr.push([currentKey, toSubtract]);

      if (cid[i][1] > 0) {
				closed = false;
			}
    }

    i--;
  }

  let status;

  if (change > 0) {
    status = 'INSUFFICIENT_FUNDS';
    changeArr = [];

  }  else if (closed) {
     status = 'CLOSED';

     for(let i = changeArr.length; i < denom.length; i++) {
       changeArr.unshift(cid[i]);
     }

     changeArr.reverse();
  }
  
	else status = 'OPEN';

	//return status and the change 
  return {
    status,
    change: changeArr
  };
}
