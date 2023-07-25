import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `
				<div class="card-list__loader">
					Загрузка...
				</div>`;
      return this.el;
    }

    this.el.classList.add('card-list');

    if (Number.isInteger(this.parentState.numFound)) {
      this.el.innerHTML = `
			  <h2 class="card-list__heading">Найдено книг - ${this.parentState.numFound}</h2>
		  `;
    } else {
      this.el.innerHTML = `
			  <h2 class="card-list__heading">Избранные книги</h2>
		  `;
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('card-list__wrapper');

    for (const card of this.parentState.list) {
      wrapper.append(new Card(this.appState, card).render());
    }

    this.el.append(wrapper);
    return this.el;
  }
}
