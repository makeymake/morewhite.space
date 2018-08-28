import { init } from 'sapper/runtime.js';
import { manifest } from './manifest/client.js';

// `routes` is an array of route objects injected by Sapper
init({
	target: document.querySelector('#sapper'),
	manifest
});

if (module.hot) module.hot.accept();