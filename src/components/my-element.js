import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

  static get properties(){
    return{

    }
  }

  static get styles(){
    return[
      css`
        :host{
          color: #8E44AD;
        }
      `
    ]
  }

  render(){
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('my-element', MyElement);