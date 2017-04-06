import React, {Component} from 'react';

export default class Add extends Component{
  constructor(props){
    super(props);

    this.state = {
       agreeNotChecked: true,
       authorIsEmpty: true,
       textIsEmpty: true
    };
  }

  onFieldChange(){

  }

  onChange(){

  }

  onCheckRule(){

  }

  onBtnClickHandler(){
    
  }

  render(){
    let agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty;

    return(
      <form className = "add cf">
        <input
          type="text"
          className="add_author"
          onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
          placeholder="Ваше имя"
          ref="author">
        </input>

        <textarea
          className="add_text"
          onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
          placeholder="Введите текст новости">
        </textarea>

        <label className="add_checkrule">
          <input
            type="checkbox"
            ref="checkrule"
            onChange={this.onCheckRule}>
          </input>
          Я согласен с правилами новостного сайта :)
        </label>
        <button
          className="add_btn"
          onClick={this.onBtnClickHandler}
          ref="alert_button"
          disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
          Добавить новость
        </button>
      </form>
    )
  }
}
