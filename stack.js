
class Stack{
  constructor(){
    this.storage={};
    this.size=0;
  }

  push(element){
    this.storage[this.size]=element;
    this.size++;
    return element+' was added';
  }
  pop(){
    let poppedElement=this.storage[this.size-1];
    delete this.storage[this.size-1];
    this.size--;
    return poppedElement + ' was deleted';
  }
  peek(){
    return 'last element is '+this.storage[this.size-1];
  }
  sizes(){
    return 'the size of stack is ' +this.size;
  }
  isEmpty(){
    if(this.size==0)
    {
      return 'yes its empty'
    }
    else
    {
      return 'no its not empty'
    }
  }
  values(){
    if(this.size==0)
    {
      return 'empty stack'
    }
    return this.storage;
  }
}

// let books=new Stack();
// console.log(books.push('harrypotter'));
// console.log(books.push('goosebumps'));
// console.log(books.push('redrobinhood'));
// console.log(books.values());
// console.log(books.pop());
// console.log(books.peek());
// console.log(books.sizes());
// console.log(books.isEmpty());
// console.log(books.values());
