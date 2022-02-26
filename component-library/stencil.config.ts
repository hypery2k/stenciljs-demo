import { angularOutputTarget as angular } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'component-library',
  outputTargets: [
    angular({
      componentCorePackage: `@m13t/component-library`,
      directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
    }),
    react({
      componentCorePackage: `@m13t/component-library`,
      proxiesFile: '../component-library-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json',
    },
  ],
};
