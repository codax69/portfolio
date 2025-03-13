import { useState, useRef } from "react";
import { Element } from "react-scroll";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    description: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.SERVICE_ID, 
        import.meta.env.TEMPLATE_ID, 
        form.current,
        import.meta.env.PUBLIC_KEY 
      );

      if (result.text === 'OK') {
        setNotificationMessage('Message sent successfully!');
        setNotificationType('success');
        setFormData({
          name: "",
          email: "",
          contact: "",
          subject: "",
          description: "",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setNotificationMessage('Failed to send message. Please try again.');
      setNotificationType('error');
    } finally {
      setIsLoading(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <Element name="contact" className="min-h-screen bg-[#09090b] relative font-mona">
      {showNotification && (
        <div className={`fixed top-5 right-5 ${
          notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down`}>
          {notificationMessage}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-gray-300">
              <h3 className="text-2xl font-semibold text-orange-500 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:prit9265@gmail.com" className="flex items-center space-x-3 group">
                  <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                    <MdEmail className="text-white text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
                    prit9265@gmail.com
                  </span>
                </a>
                
                <div className="flex items-center space-x-3 group">
                  <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                    <MdPhone className="text-white text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
                    +91 9265318453
                  </span>
                </div>
                
                <a href="https://github.com/codax69" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-3 group">
                  <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                    <FaGithub className="text-white text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
                    github.com/codax69
                  </span>
                </a>
                
                <a href="https://instagram.com/_prits_69" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-3 group">
                  <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
                    @_prits_69
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-800/50 rounded-xl p-8 backdrop-blur-sm">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 font-mona">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-zinc-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-zinc-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full bg-zinc-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-zinc-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                required
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full bg-zinc-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Hidden input fields for EmailJS */}
              <input type="hidden" name="user_name" />
              <input type="hidden" name="user_email" />
              <input type="hidden" name="contact_number" />
              <input type="hidden" name="subject" />
              <input type="hidden" name="message" />
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;