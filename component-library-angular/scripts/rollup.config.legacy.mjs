import config from './rollup.config.mjs';

const newConfig = {
  ...config,
  input: 'build/es5/core.js',
};
newConfig.output.file = 'dist/fesm5.js';

export { newConfig as default };
