import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
	constructor(state) {
		super();
		this.state = state;
	}

	search() {
		const value = document.querySelector('.search__input').value;
		this.state.searchQuery = value;
	}

	render() {
		this.el.classList.add('search');
		this.el.innerHTML = `
			<input
				class="search__input"
				type="text"
				placeholder="Найти книгу или автора..."
				value="${this.state.searchQuery}"
			/>
			<img class="search__icon" src="static/images/search.svg" alt="Search Icon" />
			<button class="search__button" type="button" area-label="Искать">
				<img src="static/images/search-white.svg" alt="Search Icon" />
			</button>
		`;

		this.el.querySelector('.search__button').addEventListener('click', this.search.bind(this));
		this.el.querySelector('.search__input').addEventListener('keydown', (e) => {
			if (e.code === 'Enter') {
				this.search();
			}
		})

			return this.el;
	}
}
