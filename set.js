class Set{
  constructor(){
    this.collection=[];
  }
  add(element)
  {
    if(!this.hasElement(element))
    {
      this.collection.push(element);
      return element+' added sucessfully'
    }
    else
    {
      return 'element already exists in the Set'
    }
  }

  hasElement(element)
  {
    if(this.collection.indexOf(element)==-1)
    {
      return false
    }
    else
    {
      return true
    }
  }

  remove(element){
    if(this.hasElement(element))
    {
      let index=this.collection.indexOf(element);
      this.collection.splice(index,1);
      return element+' removed sucessfully'
    }
    else{
      return 'element doesnt exist'
    }
  }

  sizes(){
    return this.collection.length;
  }

  values(){
    return this.collection;
  }

  isEmpty(){
    if(this.collection.length==0)
    {
      return 'yes'
    }
    else{
      return 'no its not empty'
    }
  }

  unionSet(otherSet){
    let firstset=this.values();
    let otherset=otherSet.values();
    let unionset=new Set();

    firstset.forEach((val)=>{
      unionset.add(val);
    })

    otherset.forEach((val)=>{
      unionset.add(val);
    })

    return unionset.values();
  }

  difference(otherSet){
    let otherset=otherSet.values();
    let differenceset=new Set();
    otherset.forEach((val)=>{
      if(!this.hasElement(val))
      {
        differenceset.add(val);
      }
    });
    return differenceset.values();
  }

  intersection(otherSet){
    let firstset=this.values();
    let otherset=otherSet.values();
    let intersectionset=new Set();
    firstset.forEach((val)=>{
      if(otherSet.hasElement(val))
      {
        intersectionset.add(val);
      }
    });
    return intersectionset.values();
  }
}


//
// let yellowfruits=new Set();
// console.log(yellowfruits.add('lemon'));
// console.log(yellowfruits.add('mango'));
// console.log(yellowfruits.add('pineapple'));
// console.log(yellowfruits.sizes());
// console.log(yellowfruits.values());
// console.log(yellowfruits.isEmpty());
// console.log('----\n----');
//
// let redfruits=new Set();
// console.log(redfruits.add('apple'));
// console.log(redfruits.add('cherry'));
// console.log(redfruits.add('lemon'));
// console.log('----\n----');
//
// console.log(yellowfruits.unionSet(redfruits));
// console.log('----\n----');
// console.log(yellowfruits.difference(redfruits));
// console.log('----\n----');
// console.log(yellowfruits.intersection(redfruits));
