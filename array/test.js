window.onload = function () {
    var dom = document.getElementById("test");
    levelOrder(dom);
    let arr = [1,2,3,4];
    let arr2 = arr.concat(...[5,6,7,8]);
    console.log(arr2);
}
function levelOrder1(dom) {
    if (!dom)
        return;
    var queue = [];
    queue.push(dom);
    while (queue.length > 0) {
        var cur = queue.shift();
        console.log(cur.innerText);
        if (cur.hasChildNodes()) {
            var childNodes = cur.childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                queue.push(childNodes[i]);
            }
        }
    }
    return;
}
function levelOrder(dom) {
    let result = [];
    if (!dom) {
        return;
    }
    let queue = [dom];
    while (queue.length > 0) {
        let currentLine = [];
        let len = queue.length;
        while (len > 0) {
            let current = queue.shift();
            console.log(current);
            let data = {
                tag: current.tagName,
                class: current.classList
            }
            currentLine.push(data);
            if (current.children && current.children.length > 0) {
                console.log(current.children);
                queue = queue.concat(...current.children);
            }
            len--;
        }
        result.push(currentLine);
        currentLine = [];
    }
    console.log(result);
    return result;
}