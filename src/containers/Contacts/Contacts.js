import React from 'react';

export default class Contacts extends React.Component {
  render() {
    return (
       <div className="row" style={{marginTop: '80px'}}>
         <div className="col s12 m10 offset-m1">
           <h1>Контакты</h1>
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8208.847178219392!2d41.96477846758753!3d45.032153843625935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc93ce4d89b99446!2z0JrQvtC70LvQtdC00LYg0YHQstGP0LfQuA!5e0!3m2!1sru!2sru!4v1486205453712"
              width="600" height="450" style={{border: 0}}
           />
         </div>
       </div>
    );
  }
}
