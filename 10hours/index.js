import React from 'react'
import ReactDOM from 'react-dom'
//CSS
import './index.css'
//Objects
const books = [
  {
    id: 1,
    title: 'History of past , present and future',
    date: '20.07.2022',
    author: ' Michael Jakson ',
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d5/Michael_Jackson_HIStory_Book_I.jpeg/274px-Michael_Jackson_HIStory_Book_I.jpeg',
  },
  {
    id: 2,
    title: 'Winner of the Pulizer Prize',
    date: '25.12.2022',
    author: 'Harrer Lee',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfbqwkxpwDMigyoxsmEAErhWqgeFB-NOgTQ&usqp=CAU',
  },
  {
    id: 3,
    title: 'Bless the Daughter Raised by a Voice in Her Head',
    date: '30.10.2022',
    author: 'Warsan Shire',
    img: 'https://covers.powells.com/9780593134351.jpg',
  },
  {
    id: 4,
    title: 'Rise',
    date: '05.09.2022',
    author: 'Jeff Yang, Phil Yu, and Philip Wang',
    img: 'https://covers.powells.com/9780358508090.jpg',
  },
  {
    id: 5,
    title: 'Abolition for the People',
    date: '16.01.2022',
    author: 'Colin Kaepernick',
    img: 'https://covers.powells.com/9781595911162.jpg',
  },
  {
    id: 6,
    title: 'Was It Worth It?',
    date: '19.04.2022',
    author: ' Doug Peacock',
    img: 'https://covers.powells.com/9781952338045.jpg',
  },
]

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, date, author } = book
        return (
          <div>
            <Book book={book}></Book>
          </div>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { title, author, date, img } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h6>{date}</h6>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))

// https://itnan.ru/post.php?c=1&p=324748

