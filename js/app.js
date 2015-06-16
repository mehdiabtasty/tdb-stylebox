$.root_ = $('body');
/*
 * App Initialize
 * Description: Initializes the app with intApp();
 */	
	initApp = (function(app) {
		app.SmartActions = function(){
			var smartActions = {
				// MINIFY MENU
				minifyMenu: function($this){
					if (!$.root_.hasClass("menu-on-top")){
						$.root_.toggleClass("minified");
						$.root_.removeClass("hidden-menu");
						$('html').removeClass("hidden-menu-mobile-lock");
						$this.effect("highlight", {}, 500);
					}
				},

				// TOGGLE MENU 
				toggleMenu: function(){
					if (!$.root_.hasClass("menu-on-top")){
						$('html').toggleClass("hidden-menu-mobile-lock");
						$.root_.toggleClass("hidden-menu");
						$.root_.removeClass("minified");
					//} else if ( $.root_.hasClass("menu-on-top") && $.root_.hasClass("mobile-view-activated") ) {
					// suggested fix from Christian Jäger	
					} else if ( $.root_.hasClass("menu-on-top") && $(window).width() < 979 ) {	
						$('html').toggleClass("hidden-menu-mobile-lock");
						$.root_.toggleClass("hidden-menu");
						$.root_.removeClass("minified");
					}
				}
			};
			$.root_.on('click', '[data-action="minifyMenu"]', function(e) {
				var $this = $(this);
				smartActions.minifyMenu($this);
				e.preventDefault();
				
				//clear memory reference
				$this = null;
			}); 
			
			$.root_.on('click', '[data-action="toggleMenu"]', function(e) {	
				smartActions.toggleMenu();
				e.preventDefault();
			});  
		};
		/* ~ END: SMART ACTIONS */

		return app;
		
	})({});

	// initApp.addDeviceType();
	// initApp.menuPos();
/*
 * DOCUMENT LOADED EVENT
 * Description: Fire when DOM is ready
 */
	jQuery(document).ready(function() {
		
		initApp.SmartActions();
		// activate tooltips
		$("[rel=tooltip], [data-rel=tooltip]").tooltip();
	
		// activate popovers
		$("[rel=popover], [data-rel=popover]").popover();
	
		// activate popovers with hover states
		$("[rel=popover-hover], [data-rel=popover-hover]").popover({
			trigger : "hover"
		});
	
	});