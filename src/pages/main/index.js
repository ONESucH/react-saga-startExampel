import React from 'react';
import './styles.css';

function List({item}) {
  console.log('item', item);
  return (
    <li>
      <div>Имя
      <span>{item.name}</span>
      </div>
      <div>Телефон
      <span>{item.phone}</span>
      </div>
      <div>Компания
      <span>{item.company.bs}</span>
      </div>
    </li>
  )
}

function Main({items}) {
  return (
    <div className="main-app">
      <h2>Список пользователей</h2>
      <ul>
        {items.map((item, i) => <List item={item} key={i}/>)}
      </ul>
    </div>
  )
}

export default Main;