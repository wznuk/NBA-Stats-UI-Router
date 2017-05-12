'use strict';

(function() {
    angular.module('ui-router-demo', [
        'ui.router',
        'ui-router-demo.factories',
        'ui-router-demo.services',
        'ui-router-demo.components',
    ]);

    angular.module('ui-router-demo').config(config);

    angular.module('ui-router-demo.factories', []);
    angular.module('ui-router-demo.services', []);
    angular.module('ui-router-demo.components', []);

})();