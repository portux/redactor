/**
 * This file is part of the redactor package.
 *
 * @author (c) Friends Of REDAXO
 * @author <friendsof@redaxo.org>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function ($R) {
    $R.add('plugin', 'h4', {
        init: function (app) {
            this.toolbar = app.toolbar;
        },

        // public
        start: function () {
            let obj = {
                title: redactorTranslations.h4_title,
                icon: false,
                tooltip: redactorTranslations.h4_tooltip,
                api: 'module.block.format',
                args: {
                    tag: 'h4'
                }
            };

            this.toolbar.addButton('h4', obj);
        }
    });
})(Redactor);
