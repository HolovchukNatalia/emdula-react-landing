function Partners() {
  const PLACEHOLDER_COUNT = 6;

  return (
    <section id="teams" className="w-full bg-[#F3F0F0] py-16 overflow-hidden">
      <div className="max-w-[1476px] mx-auto px-6 md:px-[88px]">
        <h3 className="mb-8 text-center text-[24px] leading-[1.42] font-normal text-[var(--secondary-1000)]">
          Built together with our partners
        </h3>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex items-center gap-6">
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
                  <div
                    key={index}
                    className="w-[150px] h-[60px] md:w-[200px] md:h-20 rounded-[20px] bg-(--light-background)"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
