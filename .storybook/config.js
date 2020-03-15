import { addDecorator, addParameters, configure } from '@storybook/react';

import { create } from "@storybook/theming";
import { withInfo } from '@storybook/addon-info';

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
addDecorator(withInfo);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
