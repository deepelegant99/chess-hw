const { jsPDF } = require("jspdf"); // will automatically load the node version

const doc = new jsPDF('landscape');
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf"); // will save the file in the current working directory
console.log("hello world");