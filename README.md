# Saiku Digest authentication [![Build Status](https://travis-ci.org/brenopolanski/saiku-digest-authentication.svg?branch=master)](https://travis-ci.org/brenopolanski/saiku-digest-authentication)

<img src="https://raw.githubusercontent.com/brenopolanski/saiku-digest-authentication/gh-assets/logo.png" alt="Simple Digest authentication for Saiku UI" align="right" />

### Simple Digest authentication for Saiku UI.

**Digest access authentication** is one of the agreed-upon methods a web server can use to negotiate credentials, such as username or password, with a user's web browser.

[Saiku](http://www.meteorite.bi/saiku) is an open source analytics client developed by [Meteorite BI](http://www.meteorite.bi/). A user interface for the analytical tool.

## Usage

1. Include **Digest** folder in:

	
  ```
  ├── saiku-ui/
  │   └── js/
  │       └── saiku/
  │           └── plugins/
  │               └── Digest/
  │                   └── plugin.js
  ```

2. Edit the file saiku-ui/index.html, insert the code below:

	```html
	<script type="text/javascript" src="js/saiku/plugins/Digest/plugin.js" defer></script>
	```
	> look for ***Saiku plugins*** comment in index.html.
	
3. Open file **Session.js**:

	
  ```
  ├── saiku-ui/
  │   └── js/
  │       └── saiku/
  │           └── models/
  │               └── Session.js/
  ```
4. Edit the file **Session.js**. Search for method ***process_session***, insert the code below:

	*substitute:*

	```javascript
	if (Settings.DEMO) {
		this.form = new DemoLoginForm({ session: this });
	} else {
		this.form = new LoginForm({ session: this });
	}
	```
	
	*to:*
	
	```javascript
	this.form = new Digest({ session: this });
	```
	
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request  :)

English is the universal language nowadays, so please don't create or comment on issues using another language.
	
## History

For detailed changelog, check [Releases](https://github.com/brenopolanski/saiku-digest-authentication/releases).

## Credits

I gratefully acknowledge the following open source project:

* [Saiku UI](https://github.com/OSBI/saiku-ui) - A user interface for the Saiku analytical tool (Apache license version 2).

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
