function showMessage() {
    // setInterval("js bad code", 3000); // bad
    setInterval(() => {
        console.log("hello js every 3 seconds"); // good ส่งฟังก์ชันเข้าไป แทน string 
    }, 3000)

    setTimeout(() => {
        console.log("hello js 2 only once"); // good ส่งฟังก์ชันเข้าไป แทน string 
    }, 3000)
}

showMessage();