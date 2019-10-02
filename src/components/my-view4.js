import { LitElement, html, css} from 'lit-element';
import '@dreamworld/dw-icon-button';
import { flexLayout } from '@dreamworld/flex-layout';
import '@dreamworld/dw-dialog';

class MyView4 extends LitElement {

  static get styles(){
    return[
      flexLayout,
      css`
        :host{
          display: block;
        }

        :host[hidden]{
          display: none;
        }
        .left-align{
          align-items: flex-start;
        }
      `
    ]
  }

  render() {
    return html`

      <h4>my view 4</h4>
      <div class="layout vertical left-align">
        <dw-icon-button icon="school" iconSize="32"></dw-icon-button>
      </div>
      <dw-dialog id="alert">Hello</dw-dialog>
    `;
  }
}

window.customElements.define('my-view4', MyView4);