import { FavoritesView } from './views/favorites/favorites.js';
import { MainView } from './views/main/main.js';

class App {
  routes = [
    { path: '', view: MainView },
    { path: '#favorites', view: FavoritesView },
  ];

  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));

    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const view = this.routes.find((r) => r.path === location.hash)?.view;

    if (!view) {
      console.log('Page is not found');
    } else {
      this.currentView = new view(this.appState);
      this.currentView.render();
    }
  }
}

new App();
