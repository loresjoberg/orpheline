(function( $ ) {

    $.fn.orpheline = function() {

        this.each(function() {

            var $this = $( this );
            console.log($( this ));
            $this.html($this.html().replace(/(\w+\W+\w+\W*)$/g,'<span style="white-space: nowrap">$1</span>'));

        });

        return this;

    };

}( jQuery ));