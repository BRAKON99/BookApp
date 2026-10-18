import { DivComponent } from "../../common/div-component";
import './card-list.css';
import { Card } from "../card/card";

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`
            return this.el
        }
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid')
        this.el.append(cardGrid)
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render())
        }
        return this.el;
    }
}