import { ShortListCvTable } from "../features/shortListedCV/ShortListCvTable";
import Heading from "../ui/Heading";

const ShortListedCV = () => {
  return (
    <div className="space-y-4">
      <Heading>Shortlisted CV&apos;s</Heading>
      <ShortListCvTable />
    </div>
  );
};

export default ShortListedCV;
