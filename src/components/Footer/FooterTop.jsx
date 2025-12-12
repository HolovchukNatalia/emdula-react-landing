import Button from "../../ui/Button/Button";

function FooterTop() {
  return (
    <div className="pb-[50px] border-b border-(--white-250)">
      <div className="flex justify-between items-center">
        <h3 className="text-[48px] leading-tight font-medium text-white max-w-[798px]">
          Let’s talk about your operations — and how AI can improve them
        </h3>

        <Button size="md" variant="primary">
          Book a conversation
        </Button>
      </div>
    </div>
  );
}

export default FooterTop;
