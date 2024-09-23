import { Download } from "lucide-react";

export const ShortListCvRow = ({ data }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow h-24">
    <img
      src={`https://randomuser.me/api/portraits/men/${data.id}.jpg`}
      alt="Random Male Person"
      className="h-12 w-12 rounded-xl"
    />

    <div className="w-28 flex-shrink-0">
      <h3 className="font-bold text-sm truncate">{data.name}</h3>
      <span className="text-xs text-gray-500 block truncate">{data.title}</span>
    </div>

    <p className="text-sm text-gray-600 prose line-clamp-3 overflow-hidden text-ellipsis max-w-md">
      {data.description}
    </p>

    <div className="w-32 flex-shrink-0">
      <div className="text-xs text-blue-600 font-semibold flex items-center space-x-1">
        <div className="w-4 h-1 rounded bg-blue-500"></div>
        <span>Skills</span>
      </div>
      <SkillDots count={data.skillRating} />
    </div>
    <button className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl text-nowrap flex items-center justify-center p-2 space-x-2 h-12 w-[30%] flex-shrink-0">
      <Download className="w-4 h-4" size={12} />
      <span className="md:text-sm text-xs">Download for 30 credits</span>
    </button>
    <button className="rounded w-4 h-4 flex-shrink-0 bg-blue-700 text-white flex items-center justify-center">
      -
    </button>
  </div>
);

const SkillDots = ({ count = 1 }) => (
  <div className="flex space-x-1 justify-start">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"
      >
        <div className="w-3 h-3 bg-white"></div>
      </div>
    ))}
  </div>
);
