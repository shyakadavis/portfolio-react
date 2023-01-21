import React, { useState, useCallback } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Button from '../components/ui/Button';

const Auth = () => {
  const [isNew, setIsNew] = useState(false);
  const handleClick = useCallback(() => {
    setIsNew(!isNew);
  }, [isNew]);
  return (
    <main>
      {isNew && (
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-primary border border-tertiary rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up for a new account
                </h1>
                <SignUpForm />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <Button children={'Log In'} onClick={handleClick} />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {!isNew && (
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-primary border border-tertiary rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log into your account
                </h1>
                <LoginForm />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{' '}
                  <Button children={'Sign Up'} onClick={handleClick} />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Auth;
