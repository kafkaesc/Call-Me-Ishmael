# Call Me, Ishmael

This project is a demonstration of how various HTML elements will interact with Angular's (click) and (keyup) event handlers. The main page will display several element labelled by their type and which event handlers are active, e.g., an anchor tag with only a click event handler will be labeled "<a> (click)".

An important behavior to notice is that several elements will be focusable but unresponsive if a user presses enter. This is an obvious source of frustration and an impediment critical enough to be a WCAG issue. It will be necessary to pair identical (keyup.enter) event handlers to maintain UX.

A second important behavior to notice is that a button element will automatically apply the click event handler if a user presses enter. This means that using the (keyup.enter) event handler on button elements the same as other elements will create a double submit bug.

In this demo all the buttons act to send a text message to your friend Ishmael, asking him to call you back. If you send him too many messages he will become annoyed and blocked you. Be careful using the button with both (click) and (keyup.enter) event handlers because he'll get annoyed twice as fast!

To run:
1. navigate to the project folder
1. `npm install`
1. `ng serve -o`

A working version of this site can be viewed at https://kafkaesc.github.io/Call-Me-Ishmael/.

The full code for this site can be viewed at https://github.com/kafkaesc/Call-Me-Ishmael.

Built by Jared Hettinger.
