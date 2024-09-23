import { Checkbox } from "../../ui/CheckBox";
import { ShortListCvRow } from "./ShortListCvRow";

export const ShortListCvTable = () => {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      title: "UI/UX Designer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      imageUrl: "/placeholder.svg?height=48&width=48",
      skillRating: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Frontend Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      imageUrl: "/placeholder.svg?height=48&width=48",
      skillRating: 5,
    },
    {
      id: 3,
      name: "Alice Johnson",
      title: "Full Stack Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      imageUrl: "/placeholder.svg?height=48&width=48",
      skillRating: 2,
    },
    {
      id: 4,
      name: "Bob Williams",
      title: "Backend Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      imageUrl: "/placeholder.svg?height=48&width=48",
      skillRating: 3,
    },
    {
      id: 5,
      name: "Emma Brown",
      title: "DevOps Engineer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      imageUrl: "/placeholder.svg?height=48&width=48",
      skillRating: 1,
    },
    {
      id: 6,
      name: "Michael Davis",
      title: "Data Scientist",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      imageUrl: "/placeholder.svg?height=48&width=48",
      skillRating: 4,
    },
  ];

  return (
    <div className="h-[75vh] overflow-y-scroll space-y-3 w-full">
      {dummyData.map((data) => (
        <div key={data.id} className="flex items-center space-x-4 ">
          <Checkbox />
          <ShortListCvRow data={data} />
        </div>
      ))}
    </div>
  );
};

{
  /* <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full">
<div className="w-12 h-12 bg-white"></div>
</div> */
}
