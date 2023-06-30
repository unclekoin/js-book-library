import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

export class MainView extends AbstractView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Поиск книг');
  }

	appStateHook(path) {
		if (path === 'favorites') {
			console.log(path);
      console.log(this.appState[path]);
		}
	}

  render() {
    const main = document.createElement('div');
    main.innerHTML =
      `<h1>Количество книг: ${this.appState.favorites.length}</h1>`;
    this.app.innerHTML = '';
    this.app.append(main);
		this.appState.favorites.push('a');
  }
}
