import UserIcon from "../../assets/icons/user.svg";

function TestimonialCard({ text, name, role }) {
  if (!text || !name || !role) {
    console.error("TestimonialCard: text, name and role are required");
    return null;
  }

  return (
    <div className="bg-white rounded-xl p-6">
      <p className="text-[16px] leading-normal text-(--grey-400) mb-6">
        {text}
      </p>

      <div className="flex items-center gap-3">
        <div className=" rounded-full flex items-center justify-center">
          <img
            src={UserIcon}
            alt={`${name} avatar`}
            className="w-[79px] h-[79px]"
            onError={(e) => {
              console.error(`Failed to load user icon for: ${name}`);
              e.target.style.display = "none";
            }}
          />
        </div>

        <div>
          <div className="text-[20px] text-[var()--secondary-1000] font-medium">
            {name}
          </div>
          <div className="text-[16px] text-(--grey-400)">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
