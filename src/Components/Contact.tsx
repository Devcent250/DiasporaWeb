import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';

export function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapIcon className="text-[#00008B]" />
                <div>123 Main St, New York, NY 10001</div>
              </div>
              <div className="flex items-center gap-4">
                <EmailIcon  className="text-[#00008B]" />
                <div>contact@example.com</div>
              </div>
              <div className="flex items-center gap-4">
                <CallIcon className="text-[#00008B]" />
                <div>+1 234 567 890</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" type="email" />
            <input placeholder="Phone" type="tel" />
            <button className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-500">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;