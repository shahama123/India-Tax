import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Countup = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Count up only once when the component is in view
    threshold: 0.3, // The percentage of the component's visibility before triggering
  });

  return (
    <div className="px-4 py-20">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20"
        >
          {inView && (
            <>
              <div className="text-center">
                <CountUp
                  className="text-[#008080] text-5xl  font-bold"
                  start={3800}
                  end={3834}
                  duration={5}
                  separator=","
                  suffix="+"
                />
                <p className="text-lg mt-2 font-semibold ">Professionals</p>
              </div>

              <div className="text-center">
                <CountUp
                  className="text-[#008080] text-5xl  font-bold"
                  start={13300}
                  end={13360}
                  duration={5}
                  separator=","
                  suffix="+"
                />
                <p className="text-lg mt-2 font-semibold ">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <CountUp
                  className="text-[#008080] text-5xl  font-bold"
                  start={44900}
                  end={44924}
                  duration={5}
                  separator=","
                  suffix="+"
                />
                <p className="text-lg mt-2 font-semibold">Business</p>
              </div>

              {/* <div className="text-center">
                <h1 className="text-[#00b6dd] text-5xl md:text-8xl font-bold">
                  24/7
                </h1>
                <p className="text-lg md:text-2xl">Customer Support</p>
              </div> */}
            </>
          )}
        </div>
    </div>
  );
};

export default Countup;