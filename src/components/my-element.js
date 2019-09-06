import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

  static get properties(){
    return{

      value: { type: String, reflect: true },

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

  constructor(){
    super();
    this.value = 'my Value';
  }

  render(){
    return html`
      <slot></slot>
      <h1>${this.value}</h1>
    `;
  }
}

customElements.define('my-element', MyElement);