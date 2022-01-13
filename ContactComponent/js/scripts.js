// Steps Components 
const ContactTemplate = document.createElement('template');
ContactTemplate.innerHTML = `
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
  form {
    background-color: #FFF;
    padding: 2rem;
    border-radius: .5rem;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
    text-align: center;
  }
  form .inputBox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  form .inputBox input {
    padding: 1.5rem;
    border: 0.2rem solid rgba(0, 0, 0, 0.1);
    color: #333;
    font-size: 1.7rem;
    margin: 1rem 0;
    width: 49%;
  }
  form .inputBox input:focus {
    border: 0.2rem solid #EE0548;
  }
  form textarea {
    width: 100%;
    border: 0.2rem solid rgba(0, 0, 0, 0.1);
    color: #333;
    font-size: 1.7rem;
    padding: 1.5rem;
    height: 15rem;
    resize: none;
  }
  form textarea:focus {
    border: 0.2rem solid #EE0548;
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
    
  <form action="">
        <div class="inputBox">
            <input type="text" name="name">
            <input type="email" name="email">
        </div>
        <div class="inputBox">
            <input type="number" name="phoneNumber">
            <input type="text" name="address">
        </div>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <input type="submit" class="btn">
    </form>`;

class ContactForm extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(ContactTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('[name="name"]').placeholder = this.getAttribute("namePlaceholder");
        this.shadowRoot.querySelector('[name="email"]').placeholder = this.getAttribute("mailPlaceholder");
        this.shadowRoot.querySelector('[name="phoneNumber"]').placeholder = this.getAttribute("numberPlaceholder");
        this.shadowRoot.querySelector('[name="address"]').placeholder = this.getAttribute("addressPlaceholder");
        this.shadowRoot.querySelector('[name="description"]').placeholder = this.getAttribute("descriptionPlaceholder");
        this.shadowRoot.querySelector('input[type="submit"]').value = this.getAttribute("submitBtnValue");
    }
}

customElements.define("contact-form", ContactForm);