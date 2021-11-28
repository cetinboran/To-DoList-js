const input = document.getElementById("input-item");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const itemTree = document.getElementById("item-tree");
let items = [];
let index = [];

// const singleDelete = () => {
//     let btn = document.createElement("button");
//     btn.innerHTML = "X";
//     itemTree.appendChild(btn);
// }


const addItem = () => {
    items.push(input.value);
    renderItem();
    // index.push(i);
};

const deleteAll = () => {
    items = [];
    renderItem();
};

const singleDelete = (itemIndex) => {
    items.splice(itemIndex, 1);
    console.log(items);
    renderItem();

};

const renderItem = () => {
    let itemText = "";
    let i = 0;
    for(let item of items){
        itemText += 
            `
                <li>
                    ${item} <button onclick='singleDelete(${i})'>X</button>
                </li>
            `;
        i++;
    }
    itemTree.innerHTML = itemText;
    input.value = "";
};



