class Node{
  constructor(data,next=null){
    this.data=data;
    this.next=next;
  }
}
class Linkedlist{
  constructor(){
    this.head=null;
    this.size=0;
  }

  insertAtfirst(data)
  {
    let node=new Node(data);
    if(!this.head)
    {
      this.head=node;
      this.next=null;
    }
    else
    {
      let current=this.head;
      this.head=node;
      node.next=current;
    }
    this.size++;
  }

  insertAtlast(data)
  {
    if(!this.head)
    {
      this.insertAtfirst(data);
    }
    else
    {
      let node=new Node(data);
      let current=this.head;
      let prev;
      while(current)
      {
        prev=current;
        current=current.next;
      }

      prev.next=node;
      this.size++;
    }

  }

  getAtindex(index)
  {
    if(index<0 || index>this.size-1)
    {
      console.log('invalid index');
    }
    else
    {
      let current=this.head;
      let x=0;
      while(x<index)
      {
        current=current.next;
        x++;
      }
      console.log(current.data);
    }
  }

  removeAtindex(index)
  {
    if(index<0 || index>this.size-1)
    {
      console.log('invalid index');
    }
    else
    {
      let current=this.head;
      let x=0;
      let prev;
      while(x<index)
      {
        prev=current;
        current=current.next;
        x++;
      }
      prev.next=current.next;
      this.size--;
    }
  }

  insertAtindex(data,index)
  {
    if(index<0 || index>this.size-1)
    {
      console.log('invalid index')
    }
    else
    {
      let node=new Node(data);
      let current=this.head;
      let x=0;
      let prev;
      while(x<index)
      {
        prev=current;
        current=current.next;
        x++;
      }
      prev.next=node;
      node.next=current;
      this.size++;
    }

  }
  printListdata()
  {
    if(!this.head)
    {
      console.log('empty');
    }
    let current=this.head;
    while(current)
    {
      console.log(current.data);
      current=current.next;
    }
  }

  clearList(){
       this.head=null;
       this.size=0;
   }

  sizes()
  {
    console.log(this.size);
  }

  isEmpty()
  {
    console.log(this.size==0);
  }

}


let list=new Linkedlist;
list.insertAtfirst(100);
list.insertAtfirst(200);
list.insertAtfirst(300);
list.printListdata();
list.insertAtindex(400,3);
list.insertAtfirst(500);
list.removeAtindex(2);
list.sizes();
list.printListdata();
