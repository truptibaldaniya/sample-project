import { LitElement, html, css} from 'lit-element';

class MyView4 extends LitElement {

  static get styles(){
    return[
      css`
        :host{
          display: block;
        }

        :host[hidden]{
          display: none;
        }
      `
    ]
  }
  
  render() {
    return html`
      <h4>my view 4</h4>
    `;
  }
}

customElements.define('my-view4', MyView4);