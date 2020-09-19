const template = document.createElement('template');
template.innerHTML = `
    <style>
        .card-container
        {
            width: 50%;
            height: 30vh;
        }
        
        .card
        {
            width: 100%;
            height: 100%;
            position: relative;
            transition: transform 2s ease-in-out;
            transform-style: preserve-3d;
        }
        
        .card-container:hover .card
        {
            transform: rotateY(180deg);
        }
        
        .card-front .h2
        {
            transform: translateZ(200px);
        }
        
        .card-back .h2
        {
            transform: translateZ(200px);
        }
        
        .card-front, .card-back
        {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            transform-style: preserve-3d;
        }
        
        .card-front
        {
            z-index: 1;
        }
        
        .card-back
        {
            transform: rotateY(.5turn);
        }
    </style>

    <div class="card-container">
        <div class="card">
            <div class="card-front">
                <h2 class="h2">card front</h2>
            </div>
            <div class="card-back">
                <h2 class="h2">card back</h2>
            </div>
        </div>
    </div>
`;

class CardFlip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.card-front').style.backgroundColor = this.getAttribute('front-color');
        this.shadowRoot.querySelector('.card-back').style.backgroundColor = this.getAttribute('back-color');
    }
}

window.customElements.define('card-flip', CardFlip);