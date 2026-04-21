/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
  const result=[[1]];    
  let count=1;
  
  while(count <= numRows){
    if(count===1){
      count++; 
      continue;
    }

    const target=result[result.length-1]
    const arr= Array(count).fill(1)
    .map((x,i,arr)=> { return (target[i-1] ?? 0) + (target[i] ?? 0)})

    result.push(arr);
    count++
  }
  return result
};

generate(5)