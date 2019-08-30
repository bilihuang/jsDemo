
line=['4', '13', '5', '/', '+']
let stack=[]
for(let i=0;i<line.length;i++){
    if(line[i]==='+'){
        stack.push(stack.pop()+stack.pop())
    }else if(line[i]==='-'){
        let a=stack.pop()
        stack.push(stack.pop()-a)
    }else if(line[i]==='*'){
        stack.push(stack.pop()*stack.pop())
    }else if(line[i]==='/'){
        let a=stack.pop()
        stack.push(stack.pop()/a)
    }else{
        stack.push(parseInt(line[i]))
    }
}
console.log(stack.pop())
let arr=line.map((item) => {
  return parseInt(item)
});