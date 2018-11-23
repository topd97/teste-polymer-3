import { Element } from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/iron-icon/iron-icon.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';
class IconToggle extends Element {
  static get template() {
    return html`
    <style>
      /* shadow DOM styles go here */
      :host {
        display: inline-block;
      }
    </style>

    <!-- shadow DOM goes here -->
    <span>Not much here yet.</span>
`;
  }

  static get is() {
    return 'icon-toggle';
  }
  constructor() {
    super();
  }
}
customElements.define(IconToggle.is, IconToggle);
