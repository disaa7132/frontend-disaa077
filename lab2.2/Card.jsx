import React from 'react';

export default function Card({ title, className, children }) {
  // Используем выражения для динамического формирования класса
  return (
    <div className={`card ${className ? className : ''}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}