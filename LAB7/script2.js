let nametask = document.getElementById("name");
        let outer = document.getElementById("outer");
        function addtask() {
            let id = Math.random();
            let str = `<div class = "task" id = "${id}">
            <p>${nametask.value}</p>
            <input type="button" value="✓" onclick="right(${id})">
            <input style= "margin-left:5px;"type="button" value="✗" onclick="wrong(${id})">
        </div>`;
            outer.insertAdjacentHTML("afterbegin", str);
        }
        function right(id){
            let ele = document.getElementById(id);
            ele.style.backgroundColor="#0f0"
        }
        function wrong(id){
            let ele = document.getElementById(id);
            ele.remove();
            console.log(id);
        }