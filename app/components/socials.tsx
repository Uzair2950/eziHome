import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: FaLinkedinIn,
      description: "Latest news and updates"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      icon: FaYoutube,
      description: "Latest news and updates"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: FaFacebookF,
      description: "Latest news and updates"
    },
    {
      name: "WhatsApp",
      url: "https://www.whatsapp.com",
      icon: FaWhatsapp,
      description: "Join the Community"
    }
  ];
  
  export default function SocialLinks() {
    return (
      <div className="w-full py-10 bg-gray-10 text-center">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {socialLinks.map((link, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2 w-1/4 relative transform transition duration-300 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg"
            >
              <link.icon size={50} style={{fill:'#466d85'}}/>
              <h3 className="font-semibold text-gray-800">Follow us on {link.name}</h3>
              <p className="text-sm text-gray-500">{link.description}</p>
              {index < socialLinks.length - 1 && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-25 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }