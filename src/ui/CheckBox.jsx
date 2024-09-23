export const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox h-6 w-6 text-blue-600 border-gray-300 rounded-md"
    />
  );
};
