const item = document.querySelector("#item");
const addItemBtn = document.querySelector(".addItem");
const list = document.querySelector(".list");

item.focus();

addItemBtn.addEventListener("click", shopList);

function shopList() {
    const newItem = item.value;
    const listItem = document.createElement("li");
    const dltBtn = document.createElement("button");
    dltBtn.className = "dltBtn";
    listItem.textContent = newItem;
    dltBtn.textContent = "Delete";

    dltBtn.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(dltBtn);
    list.appendChild(listItem);
    
    item.value = "";
}

item.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".addItem").click();
    }
});
