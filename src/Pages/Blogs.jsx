import React from 'react';

const Blogs = () => {
    return (
        <div className='w-2/3 mx-auto my-15'>
            <h1 className='mb-5 text-3xl font-bold text-center'>Blogs</h1>
            <div className="collapse bg-base-100 border  border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">What is useState and how does it work in React?</div>
                <div className="collapse-content text-sm">useState adds state to functional components and returns a value and updater function.
                Updating state triggers a re-render with the new value.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">What is the purpose of useEffect in React?</div>
                <div className="collapse-content text-sm">useEffect handles side effects like data fetching or subscriptions in components.
                It runs after render and re-runs when dependencies change.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">What is a custom hook in React and when should you use one?</div>
                <div className="collapse-content text-sm">A custom hook is a reusable function that uses other hooks to share logic.
                Use it when you need the same hook-based logic in multiple components.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Difference between controlled and uncontrolled components? Which one is better?</div>
                <div className="collapse-content text-sm">Controlled components use React state, while uncontrolled rely on the DOM and refs.
                Controlled is better for validation and complex form logic; uncontrolled is simpler for basic use.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Tell us something about useFormStatus() (explore and explain)</div>
                <div className="collapse-content text-sm">useFormStatus() is a Next.js hook that tells if a form using server actions is submitting.
                Useful for showing loading states or disabling buttons during submission.</div>
            </div>
        </div>
    );
};

export default Blogs;