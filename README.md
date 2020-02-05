# Change Detection in Angular

## Zone.runOutsizeAngular() demo
You can find this demo under `/zone`. The components associated with this view are `/views/zone` and `/components/array-sorter`.
* Change the add items to the array in `zone.component.ts` and the browser will choke
* Change `array-sorter.component.ts` to `OnPush` and watch the problem go away

## Basic OnPush demo
You can find this demo under `/basic`. The components associated with this view are `/views/basic` and `components/user-component`. 
* Change `user.component.ts` to `OnPush` and it'll stop updating
* Use immutable object instead of mutating the user object in `basic.component.ts` and it'll fire change detection
* Call `cdr.markForCheck()` inside `ngDoCheck` and it'll fire change detection

## Advanced 
You can find this demo under `/advanced`. The components associated with this view are `views/complex` and `components/card`.

* Run the demo and change a 2nd level component to OnPush. Angular will stop detecting changes every 2 seconds
* In `card.component.html` uncomment the observable binding with the async pipe. Change detection will work for OnPush components.
* In `card.component.html` uncomment the binding to `rndValue` and it won't work
    * It won't work
    * Use `cdr.markForCheck()` in the setter in `on-push.card.component.ts` and it'll detect changes again.

