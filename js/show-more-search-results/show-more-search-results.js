/* Increases default results page shown to 2 pages (20 results) 
 * stolen from University of Denver's Primo instance https://library.du.edu/
 */
    app.component('prmExploreMainAfter',{
                bindings: {parentCtrl: '<'},
                controller: function($scope){
                var vm = this;
         vm.parentCtrl.searchService.cheetah.configurationUtil.searchStateService.resultsBulkSize = 20;                    
       }
      });

/*
 * end increase default results
 */
