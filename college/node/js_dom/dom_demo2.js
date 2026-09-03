const data = [
    {
        image: "https://www.bing.com/th/id/OIP.BRfzuv_lNslKjMToY7T3FQHaEt?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
        price: "525/-"
    },

    {
        image: "https://www.bing.com/th/id/OIP.Qmq31o3ZAF-SJH7l8n8_qgHaGz?w=193&h=177&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
        price: "425/-"
    },

    {
        image: "https://www.bing.com/th/id/OIP.QZpLb-a6aCjZWm7iuq14BwHaLG?w=193&h=290&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
        price: "625/-"
    }
];


function Book(props) {

    const child = document.createElement("div");

    child.setAttribute("class", "card");


    const img = document.createElement("img");

    img.setAttribute("src", props.image);
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");


    const h2 = document.createElement("h2");

    h2.innerText = "Price = " + props.price;


    child.appendChild(img);
    child.appendChild(h2);


    return child;
}


const parent = document.getElementById("root");

const booklist = document.createElement("div");
booklist.setAttribute("class", "booklist");

for (let i of data) {
    const book = Book(i);
    booklist.appendChild(book);
}

parent.appendChild(booklist);