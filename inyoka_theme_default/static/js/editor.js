/**
 * Editor.js
 * ~~~~~~~~~~
 *
 * :copyright: (c) 2013-2016 by the Inyoka Team, see AUTHORS for more details.
 * :license: BSD, see LICENSE for more details.
 */

(function add_editor() {
  // TODO: inject own class via backend to textarea
  $("textarea").each(function() {
      var element_to_add = this;

      var editor = new SimpleMDE({
          autoDownloadFontAwesome: false,
          blockstyles: {
            bold: "__",
            italic: "_"
          },
          element: element_to_add,
/*          toolbar: [{
              name: "bold",
              action: SimpleMDE.toggleBold,
              className: "fa_icon-bold",
              title: "Bold",
            },
            {
              name: "italic",
              action: SimpleMDE.toggleItalic,
              className: "fa_icon-italic",
              title: "Italic",
            },
            "|",
            {
              name: "strikethrough",
              action: SimpleMDE.toggleStrikethrough,
              className: "fa_icon-strikethrough",
              title: "Strikethrough",
            },
          ],
*/
          spellChecker: false
      });
  });
})();
