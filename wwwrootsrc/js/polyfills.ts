// Imports various polyfills to support older browsers, as well
// as equip modern browsers with next generation capabilities
// such as zones and web components

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if (String(process.env['ENV']).toLowerCase() !== 'production') {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}