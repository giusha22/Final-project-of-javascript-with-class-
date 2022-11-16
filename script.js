let btn = document.querySelector('#btn');
let input = document.querySelector('#input')
let container = document.querySelector('#container');






class homework{
    constructor(container,input){
        this.container = container;
        this.input = input;

    }
    add(){
        let element = `<div> <input value="${this.input.value}" disabled= 'true' >
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
        <button class='save btn'>Save</button>

        </div>`
        if(input.value === ''){
            alert('enter the list')
        }else{
            container.innerHTML += element
        }
        input.value = ''
    }
    delete(){
        let dlt = document.querySelectorAll('.delete');
        
        for(let icons of dlt){
            icons.addEventListener('click',()=>{
                icons.parentNode.remove()
            })
        }
    }
    edit(){
        let edit = document.querySelectorAll('.edit');
        for (let edt of edit){
            edt.addEventListener('click',()=>{
                console.log(2323);
              edt.parentNode.childNodes[1].disabled = false
            })
            edt.parentNode.childNodes[1].disabled = true
        }
    }
    save(){
        let saveBtn = document.querySelectorAll('.save');
        for(let item of saveBtn){
            item.addEventListener('click',()=>{
                item.parentNode.childNodes[1].disabled= true
            })
        }
    }
}
let addList = new homework (container,input)

btn.addEventListener('click',()=>{
    addList.add()
    addList.delete()
    addList.edit()
    addList.save()
})

