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
    
    insertAtfirst(data){
        let node=new Node(data,this.head);
        this.head=node;
        this.size++;
    }
    
    insertAtlast(data){
        let node=new Node(data);
        if(this.size==0)
            {
                this.insertAtfirst(data);
            }
        else{
            let current=this.head;
        let previous;
        while(current){
            previous=current;
            current=current.next;
        }
        previous.next=node;
        this.size++
        }
    }
    getAtindex(data){
        let index=data;
        let current=this.head;
        for(let i=0;i<index;i++)
            {
                current=current.next;
            }
        return current.data
    }
    removeAtindex(data){
         if (index > 0 && index > this.size) {
             return;
         }
        
        let index=data;
        let current,previous;
        
         if (index === 0) {
            this.head = current.next;
         }
        else{
           current=this.head;
         for(let i=0;i<index;i++)
            {
                previous=current;
                current=current.next;
            }
        previous.next=current.next;  
        }
       this.size--;
    }
    clearList(){
        this.head=null;
        this.size=0;
    }
    printListdata(){
        let current= this.head;
        while(current)
            {
                console.log(current.data);
                current=current.next;
            }
    }
}

let list=new Linkedlist;
list.insertAtfirst(100);
list.insertAtfirst(200);
list.insertAtfirst(300);
list.insertAtfirst(400);
list.insertAtfirst(500);
list.clearList();
list.printListdata();

