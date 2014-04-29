(function($) {
    $.fn.cycle = function(arr, options) {
        var settings = {
            'delay': 5000,
            'transitionDuration': 500,
            'transitionEasing': 'swing'
        };

        if (options) $.extend(settings, options);

        return this.each(function(ndx, el) {
            $(el).data('cycle:i', 0);
            setInterval(function(el, settings, arr) {
                $(el).fadeOut(settings['transitionDuration'], settings['transitionEasing'], function() {
                    var t = $(this);
                    var i = t.data('cycle:i');
                    i = i == arr.length - 1 ? 0 : i+1;
                    t.data('cycle:i', i)
                        .html(arr[i])
                        .fadeIn(settings['transitionDuration'], settings['transitionEasing']);
                    });
            }, settings['delay'], el, settings, arr);
        });
    };
})(jQuery);
