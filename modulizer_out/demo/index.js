import './demo-element.js';
import '../../../@webcomponents/webcomponentsjs/webcomponents-bundle.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<demo-element></demo-element>`;
document.head.appendChild($_documentContainer.content);
