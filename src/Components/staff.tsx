import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Staff = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center mt-20 py-8 px-4">
      <span className="font-moonDance text-4xl">Staff</span>
      <span className="relative inline-block px-8 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#ffebbe]">
        <span className="relative text-[#2d2d2d] text-[32px] font-semibold">
          Members
        </span>
      </span>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
      
        {[
          { name: "Laetitia", role: "CEO", img: "/team3.jpg" },
          { name: "Lucas", role: "CTO", img: "/team2.jpg" },
          { name: "Devcent", role: "Manager", img: "/team4.jpg" },
          { name: "Lily", role: "Secretary", img: "/team1.jpg" }
        ].map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-center items-center p-6 border border-[#DA7110] rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="border border-[#DA7110] p-2 rounded-full">
              <div className="w-24 h-24 overflow-hidden rounded-full">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <h1 className="font-bold text-lg">{member.name}</h1>
            <span className="text-sm text-gray-600">{member.role}</span>

           
            <div className="flex gap-3">
              <div className="bg-[#DA7110] w-9 h-9 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-orange-600">
                <LinkedInIcon style={{ fontSize: '18px' }} />
              </div>
              <div className="bg-[#DA7110] w-9 h-9 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-orange-600">
                <TwitterIcon style={{ fontSize: '16px' }} />
              </div>
              <div className="bg-[#DA7110] w-9 h-9 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-orange-600">
                <FacebookIcon style={{ fontSize: '20px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
