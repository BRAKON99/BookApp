import { DivComponent } from "../../common/div-component";
import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = ` 
            <div>
                <img width=60px src="/static/logo.svg" alt="Логотип"/>
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img width=30px src="/static/search.svg" alt="Поиск"/> Поиск книг
                </a>
                <a class="menu__item" href="#favourites">
                    <img width=30px src="/static/favorites.svg" alt="Поиск"/> Избранное
                    <div class="menu__counter">
                        ${this.appState.favourites.length}
                    </div>
                </a>
            </div>
        `
        return this.el
    }
}