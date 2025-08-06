import './style.css';
import { setupAnimations } from './animations';
import { App } from './app';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App();

setupAnimations();
