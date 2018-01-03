## [react](./REACT.md) version `changelog`

###### `1.8.11 / 1.0.6`
- refactor: Dashboard radio buttons, new `onRadioBtnClick()` method
- feature: DateRangePicker `react-date`
- feature: DataTable `react-bootstrap-table`
- refactor: deprecated reactstrap `NavDropdown` change to `Dropdown` with `nav` prop
- refactor: use prop `bsSize` instead of the `size` to bootstrap's input sizing
- refactor: UI-Kits/Email use reactstrap components
- feature: Google Maps `react-google-maps`
- chore: `package.json` project dependencies update
- update react to `16.2.0`
- update react-dom to `16.2.0`
- update codemirror to `5.32.0`
- update react-quill to `1.2.3`
- update react-select to `1.1.0`
- update react-toastify to `3.0.0`
- update reactstrap to `5.0.0-alpha.4`
- update copy-webpack-plugin to `4.2.3`
- update css-hot-loader to `1.3.4`
- update node-sass to `4.7.2`
- update uglify-js to `3.2.1`
- update webpack to `3.10.0`
- update webpack-dev-server to `2.9.5`

###### `1.8.10`

- feature: Sidebar new item.widget
- feature: Sidebar new item.label
- feature: Sidebar add divider.class
- refactor: Sidebar
- feature: Notifications
- feature: Calendar

###### `1.8.9`
- update: bootstrap to `4.0.0-beta.2`
- update: react to `^16.0.0`
- update: reactstrap to: `^5.0.0-alpha.3`
- refactor: move to react-text-mask-hoc: `^0.10.4`
- update: `react-codemirror2` to `3.0.0`
- refactor: deprecated CardBlock to `CardBody` reactstrap component
- refactor: `HeaderDropdown` sample component added to `Header`
- fix: for app-header navbar-nav dropdown-menu-right
- fix: for sidebar uikits
- chore: `package.json` project dependencies update

###### `1.8.8`
- New Code Editor - CodeMirror (react-codemirror2)
- Sidebar component:
	- item with optional class (_nav.js)
	- nav link with optional variant (_nav.js)
	- external urls allowed (_nav.js)
	- optional SidebarFooter, SidebarHeader, SidebarForm components
- SidebarMinimizer component
- .brand-minimized
- .sidebar-minimized,
- Header component - sidebarMinimize
- react-transition-group downgrade to v1 : (modals and alerts reactstrap:v4.8 issue)

###### `1.8.7`
- New Rich Text Editor - Quill
- New Email App UI Kit
- New Invoicing App UI Kit
- webpack.config env.prod
- Dashboard .dropdown-menu-right temp.scss hotfix (full)
- callout.scss .chart-wrapper hotfix (full)

###### `2017.08.11`
- Bootstrap 4 beta
- Dashboard component (full):
	- line chart for social box
	- sparkline chart for callout

###### `2017.08.01`
- Sidebar component: 
	- title item with optional wrapper and class (_nav.js)
	- nav link item with optional badge
	- code refactoring

###### `2017.07.31`
- moved to [reactstrap](https://reactstrap.github.io/)
- moved to [webpack](https://webpack.js.org/) (dropping gulp)
- data driven Sidebar component (_nav.js)

