### Qred application

## ABOUT:

- Simple React Native application done in a day too show case some frontend skills in RN. There are still lots of work to be made if one would want to make this application great.

1. How to structure the application process allowing the user quick and easy access to uploading an invoice and deciding how to pay the amount specified in the invoice.
   1. The UI should be simple and easy to use which means that a “Pay” button would be a good to have.
2. Take some consideration to think about how you would architect the application to support the design in Appendix 1.
   1. If you have a “Pay” button in the application to handle payments it should take you to a screen where scanning your invoices should be an alternative. Something like a “Scan invoice” button.
   2. For the scan invoice functionality I would need to look for a library compatible handling these kind of actions. If there where no library handling these kind of actions I would look at a way to build a component that manages scanning of invoices.
3. Think of testing and quality so the application is reliable for the users.
   1. I would use a testing library like Jest for the frontend and also an automated testing tool like CircleCI to ensure the product is safe and reliable.
4. Feel free to prepare on techniques, processes, mindsets and implementation patterns you would rely on to address the above.
   - Give consideration on real time feedback for the user, how to increase conversions and how to visualize the application process responsively.
   - Assume you have unlimited budget, complete control of direction and implementation, with backing from senior management.
   - Think on Qreds values
     i. Transparency, Innovation & Passion

- I would keep this application very simple and have a mindset of KISS and DRY in reconsideration.
- If the app would’ve been a bigger application I would reconsider different tools like Redux for state management. Since this is just a show case of my thinking I will have a local state.

### Todos:

- Jest test the application
- Clean up the code base and create lib folder with components being repeatedly used
- Error handling the application
- For the invoice registration search for a library like RNCamera or something similar.
- Implement some kind of navigation in form of e.g WIX RN Navigation
- Add more animations and icons
- If application was bigger look at efficiency in form of unnecessary comp. rendering with useMemo, useCallback etc.
- Add TypeScript to the application
