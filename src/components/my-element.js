import { LitElement, html, css } from 'lit-element';

import '@dreamworld/dw-dialog';

class MyElement extends LitElement {

  static get properties() {
    return {

      value: { type: String, reflect: true },

    }
  }

  static get styles() {
    return [
      css`
        :host{
          color: #8E44AD;
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }

          50% {
            opacity: 1;
          }
        }

        .test {
          animation-name: zoomIn;
          animation-duration: 2s;
        }
      `
    ]
  }

  constructor() {
    super();
    this.value = 'my Value';
  }

  render() {
    return html`
      <slot></slot>
      <div class="test"><h1>${this.value}</h1></div>
      <dw-dialog>
        <span slot="header">Title</span>
        <div>Dialog content</div>
        <div slot="footer">
          <button dismiss>Close</button>
        </div>
      </dw-dialog>
      
    `;
  }
}

customElements.define('my-element', MyElement);