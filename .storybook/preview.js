/** @type { import('@storybook/react').Preview } */

import '../src/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
