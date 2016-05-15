A boilerplate that includes HTML5 BP, Grunt, and assemble IO for static sites.

TODO:
* Further develop assemble templates.
* Setup a single component for style guide test.
* Setup concatenation tasks for vendor provided JS.
* Move concatenated files to dist folder.
* Setup relative path for JS in template.
* Consider a JSON file for list of JS to concat.
* Keep docs from BP5 in place until we handle the defaults.
* Move learned stuff to elsewhere. Doesn't need to be here.

STATE: Currently working.
LEARNED:
* Grunt needs package files read in at the top level in grunt file not read in on individual task files.
* Ignore global can be problematic.
* When you hit an odd error, it could be a version issue.

Files that are still using BP5 Defaults.
* Server side files
* XML configs
* JS provided from BP5
* Error pages
* Editor configurations
* Anything referencing icons or OS tiles.
