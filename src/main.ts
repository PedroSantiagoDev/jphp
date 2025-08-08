import './style.css';
import { setupAnimations } from './animations';
import { App } from './app';
import { createIcons } from 'lucide';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App();

setupAnimations();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = App();
    createIcons();
  }
});
