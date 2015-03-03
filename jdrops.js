/**
* jDrops is for people who like clicking.
*
* This function is shorthand for:
*   $( document ).ready(function() {
*     console.log( "ready!" );
*   });
*
* It executes once the page is ready to be modified.
* We'll put all of our functions inside of it.
*
* Printing 'ready' to the console will let is know it worked.
* console.log( 'ready!' );
*/
$(function() {
    console.log( 'ready!' );

    $('body').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */

      /* Pre. We'll print a message to the console */
      console.log('clicked');
      /* 1. We need to get the position of the click */
      console.log(event);
      console.log(event.pageX, event.pageY);
      var x = event.screenX;
      var y = event.screenY;
      /* 2. Then we need to create a new element on that position */
      $(this).append('<div style="top: ' + (y - 100) + 'px; left: ' + x + 'px;">J</div>');
      /* 3. We'll make it drop */

      /* 4. After, we'll make it do some fun stuff */
    });
});