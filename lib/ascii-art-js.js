module.exports = {
  activate: function() {
    atom.workspaceView.command(
      'ascii-art-js:convert', this.convert);
  },

  convert: function() {
    var editor = atom.workspace.activePaneItem;
    var selection = editor.getSelection();
    var text = selection.getText();
    var options = { font: 'Star Wars' }; //awww yeah!

    var figlet = require('figlet');
    figlet(text, options, function(err, asciiArt) {
      if (err) {
        console.error(err);
      } else {
        selection.insertText("\n" + asciiArt + "\n");
      }
    });
   }
 };
