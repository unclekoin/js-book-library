import { DivComponent } from '../../common/div-component';
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
      <img src="static/images/logo.svg" alt="logo">
    </div>
		<div class="menu">
			<a href="#" class="menu__item">
				<img src="static/images/search.svg" alt="Search Icon">
				Поиск книг
			</a>
			<a href="#favorites" class="menu__item">
				<img src="static/images/favorite.svg" alt="Favorites Icon">
				Избранное
			</a>
			<span class="menu__counter">
					<span>${this.appState.favorites.length}</span>
				</span>
    </div>
		`;

    return this.el;
  }
}
