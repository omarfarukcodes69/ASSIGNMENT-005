### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Answer -1:getElementById শুধু মাত্র element রিটান করে ID এর মাধ্যমে (ID সবসময় ইউনিক হয়)।
   getElementsByClassName একই নামের element রিটান করে।
   querySelector Css selector প্রথম matching element রিটান করে ।
   querySelectorAll সব matching element,nodelist রিটান করে।

2. How do you **create and insert a new element into the DOM**?
   Answer-2: .createElement(elementName) এর মাধ্যমে তৈরি করা হয় ।
3. What is **Event Bubbling** and how does it work?
   Answer-3: event child থেকে parentChild , granparentChild ,document পর্যন্ত traval বা value রিটান করা হয়।
4. What is **Event Delegation** in JavaScript? Why is it useful?
   Answer-4: অনেক গুলা একই ক্লাসের Even Handle করার জন্য loop না চালিয়ে Parentnode কে ধরার মাধ্য Even Handle করা যায় ।
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Answer-5: preventDefault() কোনো element কে ওটো বা default কাজ বন্ধ করে ।
   stopPropagation() কোনোevent parent এর শুধু childএর bubble হওয়া বন্ধ করে parent এর নয়।
