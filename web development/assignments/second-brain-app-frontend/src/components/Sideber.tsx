import { AiOutlineYoutube } from "react-icons/ai";
import SideberItem from "./SideberItem";
import { BsTwitterX } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import Card from "./Card";

const Sideber = () => {
  return (
    <div className="flex">
      <div className="w-[15%] pl-9 h-screen absolute left-0 top-0 border-r-slate-300 border-r-2">
        <SideberItem
          title="Twitter"
          icon={<BsTwitterX className="text-lg" />}
        />
        <SideberItem
          title="Youtube"
          icon={<AiOutlineYoutube className="text-2xl" />}
        />
        <SideberItem
          title="Documents"
          icon={<IoDocumentTextOutline className="text-2xl" />}
        />
        <SideberItem
          title="Links"
          icon={<IoLinkSharp className="text-2xl" />}
        />
        <SideberItem title="Tags" icon={<FaHashtag className="text-2xl" />} />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Sideber;
