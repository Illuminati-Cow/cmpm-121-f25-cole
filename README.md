# My Changes

I changed the button click event to read the current html content of the counter span, and then attempt to parse it as a number. If succesful, the number is incremented by one and written back to the innerHTML of the counter span, and if it fails the text becomes NaN as per default behavior of the Number.parseInt function.
