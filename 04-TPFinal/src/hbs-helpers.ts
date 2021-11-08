import hbs from 'hbs'

export default function loadHelpers() : void{
  hbs.registerHelper('times', timeHelper);
  hbs.registerHelper('randomCart', randomAddCart);
}

const timeHelper = (n: number, block: any) => {
  var accum = '';
  for (let i = 0; i < n; ++i)
    accum += block.fn(i);
  return accum;
}

const randomAddCart = () : string => {
  const rand = Math.random() < 0.5;

  if(rand){
    return "bt_added_to_cart.svg";
  }
  else{
    return "bt_add_to_cart.svg";
  }
}
