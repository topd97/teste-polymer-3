import { html } from '../../../@polymer/polymer/lib/utils/html-tag.js';
import { Element } from '../../../@polymer/polymer/polymer-element.js';
class IconToggle extends Element {
  static get template() {
    return html`
    <style>
      :host {
        display: inline-block;
      }
      :host iron-icon {
        fill: var(--icon-toggle-color, rgba(0,0,0,0));
        stroke: var(--icon-toggle-outline-color, currentcolor);
      }
      :host([pressed]) iron-icon {
        fill: var(--icon-toggle-pressed-color, currentcolor);
      }    
    </style>
    
    <!-- shadow DOM goes here -->
    <iron-icon icon="[[toggleIcon]]" on-click="toggle">
    </iron-icon>
`;
  }

  static get is() { 
    return 'icon-toggle';
  }
  static get properties() {
    return {
      pressed: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      toggleIcon: {
        type: String
      }
    }
  }
  constructor() {
    super();
  }
  toggle() {
    this.pressed = !this.pressed;
  }
}

customElements.define(IconToggle.is, IconToggle);
