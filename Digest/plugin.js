/**
 * Simple Digest authentication for Saiku UI - v0.1.0
 *
 * Made by Breno Polanski <breno.polanski@gmail.com>
 * Under MIT License
 */
var Digest = Modal.extend({
	render: function() {
		var l_username = 'admin' || Settings.USERNAME,
			l_password = 'admin' || Settings.PASSWORD;

		this.session.login(l_username, l_password);

		return true;
	}
});

 /**
  * Start Plugin
  */
Saiku.events.bind('session:new', function() {
	function new_workspace(args) {
		if (typeof args.workspace.digest === 'undefined') {
			args.workspace.digest = new Digest({ workspace: args.workspace });
		}
	}

	// Add new tab content
	for (var i = 0, len = Saiku.tabs._tabs.length; i < len; i += 1) {
		var tab = Saiku.tabs._tabs[i];
		new_workspace({
			workspace: tab.content
		});
	}

	// New workspace
	Saiku.session.bind('workspace:new', new_workspace);
});
