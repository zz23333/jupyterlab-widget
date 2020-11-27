// import {
//   JupyterFrontEnd,
//   JupyterFrontEndPlugin
// } from '@jupyterlab/application';

// import { MainAreaWidget } from '@jupyterlab/apputils';

// import { ILauncher } from '@jupyterlab/launcher';

// import { reactIcon } from '@jupyterlab/ui-components';

// import { CounterWidget } from './widget';
import React from 'react'
import './index.css'
import NavigationBar from './NavigationBar'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <NavigationBar />,
  document.getElementById('root')
);
// /**
//  * The command IDs used by the react-widget plugin.
//  */
// declare namespace CommandIDs {
//   export const create = 'create-react-widget';
// }

// /**
//  * Initialization data for the react-widget extension.
//  */
// const extension: JupyterFrontEndPlugin<void> = {
//   id: 'react-widget',
//   autoStart: true,
//   optional: [ILauncher],
//   activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
//     const { commands } = app;

//     const command = CommandIDs.create;
//     commands.addCommand(command, {
//       caption: 'Create a new React Widget',
//       label: 'React Widget',
//       icon: args => (args['isPalette'] ? null : reactIcon),
//       execute: () => {
//         const content = new CounterWidget();
//         const widget = new MainAreaWidget<CounterWidget>({ content });
//         widget.title.label = 'React Widget';
//         app.shell.add(widget, 'main');
//       }
//     });

//     if (launcher) {
//       launcher.add({
//         command
//       });
//     }
//   }
// };

// export default extension;
