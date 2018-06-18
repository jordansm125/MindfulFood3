import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Interface1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
     <!-- <h2>Hello [[prop1]]!</h2> -->
	<!--<iframe src="./form2.html" width="700" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>-->
	<!--  <paper-card image="http://www.tcgreenmedia.com/wp-content/uploads/2014/07/google-developers-v01-510x380.png">
  		<div class="card-content">
    	 	<img src="http://www.tcgreenmedia.com/wp-content/uploads/2014/07/google-developers-v01-510x380.png", width = 350, height = 300>
 		</div>
		</paper-card>  -->
		
      <iframe src="./form.html" width="700" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    `;
     
 		
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'interface-1'
      }
    };
  }
}

window.customElements.define('interface-1', Interface1);
