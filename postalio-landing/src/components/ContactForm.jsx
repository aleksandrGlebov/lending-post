import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
      message: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
        .then(
          () => {
            alert('Message sent successfully!');
            resetForm();
          },
          () => {
            alert('Failed to send the message, please try again');
          }
        );
    },
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">{t('contactTitle')}</h2>
        <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto bg-gray-50 p-8 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">{t('contact.name')}</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">{t('contact.email')}</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">{t('contact.phone')}</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-600 transition transform hover:scale-105"
          >
            {t('contact.submit')}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">{t('contactUs')}</p>
      </div>
    </section>
  );
};

export default ContactForm;