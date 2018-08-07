/**!
 Agence'O Scripts
 Divers scripts

 @contributors: Guillaume Bouillon (Agence'O)
 @date-created: 2016-06-13
 @last-update: 2016-07-05
 */

;(function ($) {

    // Modules functions
    $.fn.firstWord = function (numWords) {
        var node = this.contents().filter(function () {
                return this.nodeType == 3
            }).first(),
            text = node.text(),
            first = text.split(" ", numWords).join(" ");

        if (!node.length)
            return;

        node[0].nodeValue = text.slice(first.length);
        node.before('<span class="first-word">' + first + '</span>');
    };

})(jQuery);
