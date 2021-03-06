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
    $R.add('plugin', 'outdent', {
        init: function (app) {
            this.toolbar = app.toolbar;
        },

        // public
        start: function () {
            let obj = {
                title: redactorTranslations.outdent_title,
                icon: true,
                api: 'module.list.outdent',
                observe: 'list'
            };

            this.toolbar.addButton('outdent', obj);
        }
    });
})(Redactor);
