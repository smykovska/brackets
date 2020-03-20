module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    for (let i=0; i<arr.length; i++) {
      if(isBracketInConfig(bracketsConfig, arr[i], arr[i+1])){
        arr.splice(i, 2);
        i = -1;
      }
    } 
    return arr.length === 0;
} 


function isBracketInConfig(bracketsConfig, first, second){
  for(var k = 0; k < bracketsConfig.length; k++){
    if(bracketsConfig[k][0] == first && bracketsConfig[k][1] == second){
        return true;
    }
  }
  return false;
}