import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUs = () => {
  return (
    <div id='contacts' className="container mx-auto px-4 sm:px-8 py-16 h-screen">
      <h1 className="text-center text-4xl font-bold mb-8">Contact Us</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-16 bg-[#FEFAF2] rounded-lg">
        <div className="w-full sm:w-1/2 p-8 rounded-lg">
          <h2 className="text-[#1F365B] text-3xl font-semibold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-700 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industry's standard dummy text</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#1F365B] text-white p-1 rounded-lg">
              <LocationOnIcon />
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">P.O. Box 3527, KN 48 St, and KN82 ST3</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#1F365B] text-white p-1 rounded-lg">
              <EmailIcon />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">email@example@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#1F365B] text-white p-1 rounded-lg">
              <PhoneIcon />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+250 799 999 99</p>
            </div>
          </div>

          
          <div className="flex gap-6 mt-4">
            <Facebook className="text-[#1F365B]" />
            <Instagram className="text-[#1F365B]" />
            <LinkedIn className="text-[#1F365B]" />
            <YouTube className="text-[#1F365B]" />
          </div>
        </div>

      
        <div className="w-full sm:w-1/2 p-8 rounded-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-lg font-semibold">First Name:</label>
              <input type="text" id="firstName" className="w-full p-3 mt-2 border bg-white border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-lg font-semibold">Last Name:</label>
              <input type="text" id="lastName" className="w-full p-3 mt-2 border border-gray-300 bg-white rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">Email:</label>
              <input type="email" id="email" className="w-full p-3 mt-2 border border-gray-300 bg-white rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold">Message:</label>
              <textarea id="message" className="w-full p-3 mt-2 border border-gray-300 bg-white rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-orange-500 w-full text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
