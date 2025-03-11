import Model from "./Model.jsx";

const SkillsElement = () => {
  return (
    <div className="relative z-[5]">
      <Model
        pos="top-8 right-8 animate-bounce delay-150 duration-1000 repeat-1"
        url="https://i.ibb.co/VWYc2qBX/html.png"
        logoName="HTML"
        size={`absolute  h-36 w-36`}
      />

      <Model
        pos="top-12 left-16 animate-bounce delay-300 duration-1000 repeat-1"
        url="https://i.ibb.co/RTGgs7Nh/css3.png"
        logoName="CSS"
        size="absolute  h-40 w-40"
      />
      <Model
        pos="right-96 top-96 animate-bounce delay-300 duration-1000 repeat-1"
        url="https://i.ibb.co/N2Mp7jmH/javascript.png"
        logoName="Javascript"
        size="absolute  h-40 w-40"
      />
      <Model
        pos="left-80 top-96 animate-bounce delay-150 duration-1000 repeat-1"
        url="https://i.ibb.co/Rp3LvQRD/react.png" 
        logoName="ReactJs"
        size="absolute"
        imgSize="h-32 w-32"
      />
      <Model
        pos="-translate-y-6 top-1/2 left-1/2 animate-bounce delay-300 duration-1000 repeat-1"
        url="https://i.ibb.co/vxCGTnzK/nodejs.png"
        logoName="NodeJs"
        size="absolute  h-40 w-40"
      />
      <Model
        pos="left-22 top-[28rem] animate-bounce delay-100 duration-1000 repeat-1"
        url="https://i.ibb.co/v4Z0j2XR/tailwind-css.png"
        logoName="TailwindCss"
        size="absolute h-28 w-28 "
      />
      <Model
        pos="right-2 top-[26rem] animate-bounce delay-150 duration-1000 repeat-1"
        url="https://i.ibb.co/wZgq4r8w/mongo-db.png"
        logoName="MongoDB"
        size="absolute h-28 w-28 "
      />
    </div>
  );
};

export default SkillsElement;
