(function () {
    'use strict'
    function CategoriesComponent(){
        return {
            templateUrl: 'shoppingList.html',
            controller: ShoppingListComponentController,
            bindings: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            }
        }
    }
})();