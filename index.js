/*  doing work in response to something happening is called event handling.
the event is what the user does and the call back function is the work that will happen in response to the 
event being triggered.


Common types of events are
1. mouse click- javascripts listens to when a mouse hoovers or thouches an lement in the page 
    and responsed by higlighting it , it can also listen to a double lick that reposnsed by zooming in 
    on the node.
    
2. key press - these are keyboards events. there are a) keyups
and b) keydowns and c) keypress. this mostly used in game programming.

3. form submission- html buttons use a submit button to submit a form
in this the submit event is fired.*/

// when you set up an event handler and when javscript recognizes that event, it will execute the event 
// handler's work whish is stored in a callback funciton.