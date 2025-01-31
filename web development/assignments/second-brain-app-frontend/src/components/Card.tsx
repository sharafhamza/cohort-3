import { IoDocumentTextOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-1/3 h-auto bg-white p-4 border-slate-200 border rounded-2xl">
      <div className="flex justify-between">
        <div className="flex gap-1.5">
          <IoDocumentTextOutline className="text-2xl text-icon cursor-pointer" />
          <p className="font-medium">Project Ideas</p>
        </div>
        <div className="flex gap-3">
          <IoShareSocialOutline className="text-2xl text-icon cursor-pointer" />
          <AiTwotoneDelete className="text-2xl text-icon cursor-pointer" />
        </div>
      </div>
      <div className="rounded-xl px-8">
        <blockquote className="twitter-tweet" data-dnt="true" align="center">
          <p lang="en" dir="ltr">
            It&#39;s pretty awesome how dancing makes robots less intimidating.
            Looking forward to seeing more nontrivial Machine Learning on these
            robots. Credit: Boston Dynamics.{" "}
            <a href="https://t.co/wnB2i9qhdQ">pic.twitter.com/wnB2i9qhdQ</a>
          </p>
          &mdash; Reza Zadeh (@Reza_Zadeh){" "}
          <a href="https://twitter.com/Reza_Zadeh/status/1344009123004747778?ref_src=twsrc%5Etfw">
            December 29, 2020
          </a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        {/* <iframe
          className="rounded-xl mt-3"
          width="100%"
          height="180px"
          src="https://www.youtube.com/embed/d-dsEDWh_Xo?si=VKvUqeWbATmkbMZp&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
};

export default Card;
