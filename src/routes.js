import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './View/App';
import TasksIndex from './View/tasks_index';
import TasksNew from './View/tasks_new';
import TasksShow from './View/tasks_show';


export default(
	<Route path="/" component={App}>
		<IndexRoute component={TasksIndex} />
		<Route path="posts/new" component={TasksNew} />
		<Route path="posts/:id" component={TasksShow} />
	</Route>
);