Instructions to Run the Project

    1.	Start the Server:
        •	Navigate to the server folder:
            cd server
            npm install
            node server.js
    2.	Start the Client:
        •	Navigate back to the root of the project:
        npm install
        npm start

Project Details

    •	Styling: I used styled-components for CSS. I even added a fun theme mode toggle, which wasn’t required, but I enjoyed playing around with it.
    •	Hooks: This project makes extensive use of React hooks:
    •	useReducer: For complex state management.
    •	useEffect: For handling side effects like data fetching.
    •	useMemo and useCallback: For optimizing performance by memoizing values and functions.
    •	useState: For simpler state management.

Performance Considerations

    •	Large Data Handling: Since this app deals with a large amount of data, we need to think about performance improvements.
    •	Pagination: Implementing pagination can help by loading only a small portion of the data at a time.
    •	Intersection Observer: We can use this to load and display only the items that are currently visible on the screen, which can significantly improve performance.

I hope this helps to understand how to run the project and the choices made during development! If you have any questions or need further clarification, feel free to ask.
