 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: In JavaScript,getElementById,getElementsByClassName,querySelector and querySelectorAll are methods used to select HTML elements from a webpage. The method getElementById() is used to select a single element by its unique ID. Since an ID is always different for each element, this method always returns only one element. 

The method getElementsByClassName() is used to select all elements that have the same class name. It can return multiple elements at the same time. The result is an HTMLCollection, and you need to access elements using an index number, such as [0], [1], and so on.


The querySelector() selects the first element that matches a given CSS selector. This means you can use ID selectors, class selectors, tag names, and even more complex CSS rules.Even if many elements match, it will return only the first one.


The querySelectorAll() method is similar to querySelector(), but it selects all elements that match the given CSS selector. It returns a NodeList that contains every matching element. 

2. How do you create and insert a new element into the DOM?
Ans: To create and insert a new element into the DOM in Javascript, first use the document.createElement() method to create a new HTML element.
After creating the element can add content to it using innerText or innerHTML ,then add classes ,IDs or other attributes using className,Id or setAttribute().
Next, select a parent element and insert it into the DOM.  




3. What is Event Bubbling? And how does it work?
Ans:Event Bubbling is a mechanism in JavaScript where an event starts from the target element and then propagates upward through its parent elements until it reaches the top of the DOM tree (usually the document object).
When a user performs an action such as clicking a button, the event is first triggered on the element where the action happened. This element is called the target element. After that, the same event moves upward to its parent element, then to the grandparent element, and continues until it reaches the top of the DOM (usually the document).
For example, if a button is inside a div and the button is clicked, the event first occurs on the button, then on the div, and then on other parent elements. This upward flow of the event is called Event Bubbling.







4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation means handling child element events using a parent element. The parent element listens for events that occur on its child elements. When an event happens, it is captured using event bubbling and the parent elements checks which chlid element triggered the event by using event.target.


Event Delelgation is useful because it reduces memory usage,improves performance.  It is especially helpful when elements can be added dynamically, as new elements can be handled without adding new event listeners.




5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() : The  preventDefault() method is used to stop the default action of an element. Many HTML elements have their own built-in behavior. If  preventDefault() is used ,these default actions will not happen.

stopPropagation() : The stopPropagation()  method is used to stop the event from moving to parent elements. Normally, an event goes from the target element to its parent elements through event bubbling. When stopPropagation()  is used, the event stops at that element and does not go upward.





