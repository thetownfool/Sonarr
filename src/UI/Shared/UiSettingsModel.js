'use strict';
define(
    [
        'backbone',
        'Shared/ApiData'
    ], function (Backbone, ApiData) {
        var UiSettings = Backbone.Model.extend({

            url : window.NzbDrone.ApiRoot + '/config/ui',

            shortDateTime : function () {
                return this.get('shortDateFormat') + ' ' + this.time(true);
            },

            longDateTime : function () {
                return this.get('longDateFormat') + ' ' + this.time(true);
            },

            time : function (includeMinuteZero) {
                if (includeMinuteZero) {
                    return this.get('timeFormat').replace('(', '').replace(')', '');
                }

                return this.get('timeFormat').replace(/\(\:mm\)/, '');
            }
        });

        var instance = new UiSettings(ApiData.get('config/ui'));
        return instance;
    });
