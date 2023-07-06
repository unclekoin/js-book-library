import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    const isFavorite = this.appState.favorites.find(
      (card) => card.key === this.cardState.key,
    );

    this.el.innerHTML = `
			<div class="card__image">
      	<img src="https://covers.openlibrary.org/b/olid/${
          this.cardState.cover_edition_key
        }-M.jpg" alt="Обложка">
    	</div>
    	<div class="card__info">
				<div>
					<div class="card__tag">
						${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
					</div>
					<div class="card__title">
						${this.cardState.title}
					</div>
					<div class="card__author">
						${this.cardState.author_name ? this.cardState.author_name : 'Не задано'}
					</div>
				</div>
				<div class="card__footer">
					<button class="card__button${isFavorite ? ' card__button_active' : ''}">
						${
              isFavorite
                ? '<img src="static/images/favorite.svg" alt="Favorite Icon">'
                : '<img src="static/images/favorite-white.svg" alt="Favorite Icon">'
            }
					</button>
				</div>
    	</div>
		`;

    return this.el;
  }
}

//  https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg
// this.cardState.title
// this.cardState.author_name
