import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    grecaptcha.execute('6Ld0knQlAAAAACK-5SFSB5-VrsfIeQTI4KXd8O6T', {action: 'submit'}).then(function(token) {
      emailjs.sendForm('service_ucwym58', 'template_mjft6ee', '#contact-form', 'tMFc16INtfK2kwXXh', {
        'g-recaptcha-response': token
      }).then(
        () => {
          setIsSuccess(true);
          reset();
          setError(false);
          setErrorMessage("");
          setIsLoading(false);
        },
        (error) => {
          setError(true);
          setErrorMessage(error.text)
          setIsLoading(false);
          setIsSuccess(false);
        }
      );
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="contact-form"
      className="w-full mx-auto p-4 md:p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800"
    >
      <div className="mb-6 w-full">
        <label htmlFor="name" className="block font-semibold mb-2">
          Name
        </label>
        <input
          {...register('name', { required: true })}
          id="name"
          type="text"
          className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:border-purple-500 dark:focus:border-orange-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
        />
        {errors.name && (
          <p className="text-red-500 mt-2">This field is required</p>
        )}
      </div>
      <div className="mb-6 w-full">
        <label htmlFor="email" className="block font-semibold mb-2">
          Email
        </label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          id="email"
          type="email"
          className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:border-purple-500 dark:focus:border-orange-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
        />
        {errors.email && (
          <p className="text-red-500 mt-2">
            Please enter a valid email address
          </p>
        )}
      </div>
      <div className="mb-6 w-full">
        <label htmlFor="message" className="block font-semibold mb-2">
          Message
        </label>
        <textarea
          {...register('message', { required: true })}
          id="message"
          rows="8"
          className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:border-purple-500 dark:focus:border-orange-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 mt-2">This field is required</p>
        )}
      </div>
      <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 text-white font-bold px-8 py-4 rounded-md hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500 dark:hover:from-yellow-400 dark:hover:via-orange-400 dark:hover:to-pink-400 disabled:opacity-50"
      >
        {!isLoading ? (
          <>
            <span className="mr-2">Send message</span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </>
        ) : (
          <span>Sending...</span>
        )}
      </button>
      {error && (
        <p className="text-red-500 mt-6">An error occurred while sending your message, {errorMessage}</p>
      )}
      {isSuccess && (
        <p className="text-green-500 mt-6">Your message was sent successfully! Keep an eye on your inbox.</p>
      )}
    </form>
  );
};

export default ContactForm;
