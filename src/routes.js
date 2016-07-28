import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';

import HomePage from './components/home/HomePage.jsx';
import ListPage from './components/list/ListPage.jsx';
import TabsPage from './components/tabs/TabsPage.jsx';
import ModalPage from './components/modal/ModalPage.jsx';
import LoaderPage from './components/loader/LoaderPage.jsx';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="tasks/list" component={ListPage} />
		<Route path="tasks/tabs" component={TabsPage} />
		<Route path="tasks/modal" component={ModalPage} />
		<Route path="tasks/loader" component={LoaderPage} />
	</Route>
);
