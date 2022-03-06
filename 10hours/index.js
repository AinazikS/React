import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
//Objects
const firstBook = {
  title:"History of past , present and future",
  date: "20.07.2022",
  author: " Michael Jakson ",
  img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d5/Michael_Jackson_HIStory_Book_I.jpeg/274px-Michael_Jackson_HIStory_Book_I.jpeg",
};
const secondBook = {
  title:'Winner of the Pulizer Prize',
  date: "25.12.2022",
  author: "Harrer Lee",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfbqwkxpwDMigyoxsmEAErhWqgeFB-NOgTQ&usqp=CAU",
};
// let date = "20.07.2022";
// const title = " Michael Jakson ";
// const img = "img link here"

function Booklist() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
        date={firstBook.date}
      />
      <Book
        title={secondBook.title}
        img={secondBook.img}
        author={secondBook.author}
        date={secondBook.date}
      />
    </section>
  );
}

const Book = (properties) => {
  console.log(properties);
  return (
    <article className="book">
      <img src={properties.img} alt="" />
      <h1>{properties.title}</h1>
      <h4>{properties.author.toLocaleUpperCase()}</h4>
      <h6>{properties.date}</h6>
      <p>{properties.job}</p>
    </article>
  );
};


ReactDOM.render(<Booklist />, document.getElementById("root"));
