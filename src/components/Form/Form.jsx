import React from "react";
import { ButtonSubmit } from "../ui/Buttons/ButtonSubmit";

export const Form = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-0.5 px-4 sm:px-6 lg:px-8">
      <div>
        <h4 className="text-left text-xl font-bold text-red-600">
          LOREM IPSUM DOLOR SIT
        </h4>
        <p className="mt-2 text-left text-sm text-black-600">
          Lorem ipsum dolor sit amet, conssectetur adipiscing alit.
        </p>
      </div>
      <form className="mt-2 space-y-2" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="shadow-sm -space-y-px">
          <div className="py-1">
            <label htmlFor="email-address" className="sr-only">
              Placeholder
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Placeholder"
            />
          </div>
          <div className="py-1">
            <select
              id="countries"
              className="relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option selected>Placeholder</option>
              <option value="option1">Option 1</option>
            </select>
          </div>

          <div className="py-1">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
            border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-black-900"
            >
              Lorem ipsum dolor sit amet, conssectetur adipiscing alit.
            </label>
          </div>
        </div>

        <div>
          <ButtonSubmit onClick={onClick} />
        </div>
      </form>
    </div>
  );
};
