import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Поиск книг');
  }

	render() {
		const main = document.createElement('div');
		main.innerHTML = '<h1>Main Page</h1>';
		this.app.innerHTML = '';
		this.app.append(main);
	}
}
