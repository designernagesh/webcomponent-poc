// Vendors Boxes 
let VendorBoxTemplate = document.createElement("template");
VendorBoxTemplate.innerHTML=`
    <style>
        * {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        text-decoration: none;
        border: none;
        outline: none;
        text-transform: capitalize;
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
      }
      
      *::-moz-selection {
        background-color: #EE0548;
        color: #FFF;
      }
      
      *::selection {
        background-color: #EE0548;
        color: #FFF;
      }
      
      steps-todo {
        width: 30%;
        border: 2px solid red;
      }
      
      .step {
        background-color: #FFF;
        -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
        border-radius: .5rem;
        margin: 1rem;
        padding: 2rem;
        text-align: center;
        font-style: normal;
      }
      
      .step span {
        font-size: 7rem;
        color: #EE0548;
        font-weight: bolder;
      }
      
      .step h3 {
        font-size: 3rem;
        color: #130f40;
      }
      
      .step p {
        font-size: 1.5rem;
        color: #666;
        padding: 1rem 0;
      }
      
      .btn {
        font-size: 1.7rem;
        display: inline-block;
        margin-top: 1rem;
        border: 0.2rem solid #130f40;
        color: #130f40;
        padding: .8rem 3rem;
        cursor: pointer;
        background: none;
      }
      
      .btn:hover {
        background-color: #EE0548;
        border-color: #EE0548;
        color: #FFF;
      }
      
      .box {
        -webkit-box-flex: 1;
            -ms-flex: 1 1 30rem;
                flex: 1 1 30rem;
        margin: 1rem;
        overflow: hidden;
        position: relative;
        border-radius: .5rem;
        -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
        height: 25rem;
      }
      
      .box:hover img {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
      }
      
      .box:hover .info {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
      }
      
      .box img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
           object-fit: cover;
      }
      
      .box .info {
        position: absolute;
        top: 0;
        left: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-flow: column;
                flex-flow: column;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        -webkit-transform: scale(1.3);
                transform: scale(1.3);
        opacity: 0;
      }
      
      .box .info h3 {
        font-size: 3rem;
        color: #130f40;
      }
      
      .box .info p {
        font-size: 1.7rem;
        color: #333;
        padding: 1rem 0;
      }
    </style>

    <div class="box">
        <img src="" alt="">
        <div class="info">
            <h3></h3>
            <p></p>
            <a href="#" class="btn"></a>
        </div>
    </div>`;

class VendorBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(VendorBoxTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector("img").src = this.getAttribute("imgSrc");
        this.shadowRoot.querySelector("img").alt = this.getAttribute("alt");
        this.shadowRoot.querySelector("h3").innerText = this.getAttribute("title");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("description");
        this.shadowRoot.querySelector("a").innerText = this.getAttribute("linkText");
        this.shadowRoot.querySelector("a").href = this.getAttribute("hrefLink");
    }
}
customElements.define("vendor-box", VendorBox);