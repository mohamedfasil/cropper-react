import { addDecorator, addParameters, configure } from '@storybook/react';

import { create } from "@storybook/theming";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  options: {
    panelPosition: "right",
    theme: create({
      base: "light",
      brandTitle: "cropper-react",
      brandUrl: "https://github.com/mohamedfasil/pages/ui/docs/"
    })
  }
});
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
configure(require.context('../src', true, /\.stories\.tsx$/), module);
