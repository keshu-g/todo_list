const update = (title, todo) => {
    document.getElementById("todolist").innerHTML += `
    <div class="m-6 bg-white p-6 rounded-md text-gray-500 shadow-lg font-mono flex ">
        <p class="px-4 py-1"> <b class="font-mono text-black">${title} : </b>${todo}</p>
        <button type="button" class="bg-red-500 px-4 py-1 rounded-md font-bold text-white ml-auto"
        onclick="deleteone('${title}');">Delete</button>
    </div>`
    console.log("done" + title + todo)
};
const oldtodoshow = () => {
    console.log("opopopop");
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        let key = localStorage.key(i)
        document.getElementById("todolist").innerHTML += `
        <div class="m-6 bg-white p-6 rounded-md text-gray-500 shadow-lg font-mono flex ">
            <p class="px-4 py-1"> <b class="font-mono text-black">${key} : </b>${localStorage.getItem(key)}</p>
            <button type="button" class="bg-red-500 px-4 py-1 rounded-md font-bold text-white ml-auto"
            onclick="deleteone('${key}')">Delete</button>
        </div>`
    }
};

oldtodoshow()
window.deleteall = () => {
    localStorage.clear()
    location.reload();
};

let logtodo = () => {
    console.log("done")
    let title = document.getElementById("title").value;
    let todo = document.getElementById("todo").value;
    // console.log(title);
    localStorage.setItem(title, todo)
    update(title, todo)
    document.getElementById("forme").reset();
}
window.deleteone = (key) => {
    localStorage.removeItem(key);
    location.reload()
}
