console.log("HI Steps");
// Steps Components 
const StepsTemplate = document.createElement('template');
StepsTemplate.innerHTML = `
  <style>
  *{
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    text-transform: capitalize;
    transition: all .2s linear;
}
.step {
    background-color: #FFF;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
    border-radius: .5rem;
    margin: 1rem;
    padding: 2rem;
    text-align: center;
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
  </style>
    <div class="step">
        <span></span>
        <h3></h3>
        <p></p>
        <a href="#" class="btn"></a>
    </div>`;

class StepsTodo extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(StepsTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector("span").innerText = this.getAttribute("step");
        this.shadowRoot.querySelector("h3").innerText = this.getAttribute("title");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("description");
        this.shadowRoot.querySelector("a").innerText = this.getAttribute("btn");
        this.shadowRoot.querySelector("a").href = this.getAttribute("link");
    }
}

customElements.define("steps-todo", StepsTodo);