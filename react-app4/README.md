# <u>Food App </u>

## Learnings 

[x] Setting up routes using the file system:

  * Utilize special filenames inside the app folder, such as:
    * `page.js`: for rendering the page
    * `layout.js`: for defining layout structure
    * `error.js`: for error handling
    * `not-found.js`: for handling 404 errors
    * `loading.js`: to display a loading state during data fetching or transitions


[x] Using <Suspense> for better control:

  * The <Suspense> component provides more control over loading states 
  by allowing you to specify a fallback UI while awaiting data or component loading.

    
[x] Configuring dynamic routes:

  * Some path segments might not be known in advance, 
  but Next.js allows you to define dynamic routes, 
  making it possible to handle these unknown segments seamlessly.

[x] Server-side rendering by default:

  * All components are rendered on the server by default 
unless explicitly marked with the `'use client'` directive.
  * The `'use client'` directive is used to convert a file
and its components into client-side components.
  * When a component is marked as client-side, client-side 
functionalities like `useState` and `useEffect` can be 
used to handle user events and manage state directly in the browser.

[x] Taking advantage of server components for data fetching:

 * In server components, you can fetch data directly inside the 
component itself. There's no need to use `useEffect` or make 
requests to a separate backend API. Instead, you can fetch 
the data right within your server component.

[x] Server Actions:

 * Learned about server actions, which are async functions stored 
in files marked with the `'use server'` directive. These can be 
assigned as values to the action prop on form elements, either 
directly or using the `useFormState` hook (provided by react-dom).
Server actions allow to handle responses returned from the 
server and potentially update the UI, such as displaying error 
messages in case of submission failures.
 * `useFormStatus` hook: helps determine whether a form is 
currently being submitted. This information can be used to 
update the UI, like showing loading spinners or disabling 
form elements during submission.

[x] Aggressive caching in Next.js:

 * Next.js does aggressive caching, especially in production mode.
To ensure that the latest data is fetched and visible on pages 
after updates, the `revalidatePath` function should be called 
whenever data is changed. This is important for ensuring fresh 
content.

[x] Metadata configuration:

 * Metadata can be added to a page, and it can either be statically
defined or dynamically generated based on the page's content 
or other factors.


    