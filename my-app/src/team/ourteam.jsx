import React from "react";
import team01 from "../assets/team-01.jpg";
import team02 from "../assets/team-02.jpg";
import team03 from "../assets/team-03.jpg";
import team04 from "../assets/team-04.jpg";
import team05 from "../assets/team-05.jpg";
import team06 from "../assets/team-06.jpg";


const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: "Pavia Sandgreen", role: "CEO", image: team01 },
    { id: 2, name: "Mehret Fethawi", role: "Senior Machanic", image: team02 },
    { id: 3, name: "Ahti Raila", role: "General Manager", image: team03 },
    { id: 4, name: "Ewan Brooks", role: "Junior Machanic", image: team04 },
    { id: 5, name: "Raine Helminen", role: "Wash Expert", image: team05 },
    { id: 6, name: "Felix Dresdner", role: "Senior Manager", image: team06 },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <img
              src={member.image}
              alt={member.name} // ✅ Fixed: Only the name is used
              className="w-40 h-40 mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
