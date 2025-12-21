import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <>
      <ContactForm />
      <section
        id="contact"
        className="mt-4 px-4 text-center"
      >
        <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400 space-y-1">
          <p>
            © {new Date().getFullYear()} Kamal Kant Sahoo.
            All bugs reserved 🐞
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
