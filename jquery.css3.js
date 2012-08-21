(function( $ ) {

    /**
	  * CSS3 compatiblity mode
	  * 
	  * Usage like http://api.jquery.com/css/ 
	  * This will additionally set the prefixed css properties
	  */
    $.fn.css3 = function(name, value) {
        var prefixes = ["", "-ms-", "-moz-", "-webkit-", "-o-"];
        if (value !== undefined || typeof name === "object") {
            // set value
            var values = new Object();
            var map = new Object();
            if (typeof value === "object") {
                // map with values
                values = value;
            } else {
                // single value (or function)
                values[name] = value;
            }
            
            $.each(values, function(name, value) {
                // TODO only add prefixes for CSS3 properties
                $.each(prefixes, function(index, prefix) {
                    map[prefix + name] = value;
                });
            });
            
            return this.css(map);
        } else {
            // get value
            // TODO when undefined then look check with other prefixes
            return this.css(name);
        }
    };
	
})( jQuery );