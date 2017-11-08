# OverlapMap

This is a demo of an issue with cordova-plugin-googlemaps in an ionic project where the header bar overlaps the map div when scrolling.

If the bar is over top of the map, then buttons in the header cannot be pressed.

## Before overlap

![alt text](https://github.com/jeffreyjamesmmm/overlapmap/blob/master/screenshots/notoverlapped.png)

## Map overlapped by header bar

The "Push" button cannot be pressed when the screen is in this state. Pressing it sendings the event to the map instead. I tried
setting the z-index to 1000 for the button and it did not fix the issue.

![alt text](https://github.com/jeffreyjamesmmm/overlapmap/blob/master/screenshots/overlapped.png)
