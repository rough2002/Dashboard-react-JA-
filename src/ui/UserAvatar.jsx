import userImage from "../assets/user.jpg";

const UserAvatar = () => {
  return (
    <div className="flex gap-2 items-center">
      <span className="flex flex-col items-end">
        <p className="text-lg font-semibold">Hi , Robert</p>
        <p className="text-blue-600 font-medium text-sm">Credits left: 300</p>
      </span>
      <img
        src={userImage}
        alt="User Image"
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default UserAvatar;
