import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const TabContent = ({ visible, children }) => (
  <CSSTransition in={visible} timeout={300} classNames="fade">
    <div>{visible && children}</div>
  </CSSTransition>
);

const ContentTabbing = () => {
  const [activeTab, setActiveTab] = useState("research");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-16 w-[70%] mx-auto bg-[black] border">
      <div className="tabs mb-4">
        <div
          className={`tab text-xl font-bold ${
            activeTab === "research" ? "active" : ""
          }`}
          onClick={() => handleTabClick("research")}
        >
          Research Interest
        </div>
        <div
          className={`tab text-xl font-bold ${
            activeTab === "passion" ? "active" : ""
          }`}
          onClick={() => handleTabClick("passion")}
        >
          Passion
        </div>
      </div>

      <div className="content overflow-hidden text-justify text-lg">
        <TabContent visible={activeTab === "research"}>
          <div className="tab-content select-none">
            As a student deeply fascinated by the intricate workings of the
            human brain, I find myself on a continuous journey of exploration
            and discovery, delving deep into the fascinating realms of
            neuroscience. I’m interested in understanding how and why we make
            the decisions that we do. I study and create content on topics
            related to brain sciences, uncovering how emotions impact our
            thoughts and actions through neural networks. My current focus lies
            in the neuroscience of addiction, where I work closely with senior
            neuroscientists to build educational modules aimed at elucidating
            how findings and insights from neuroscientific studies can be
            applied in our daily lives. One aspect of the work in addiction
            neuroscience involves exploring the intricate neural pathways and
            neurochemical mechanisms that underlie addictive behaviors.
            <br />
            I’ve also contributed to mental health projects and mentored a
            public health research project on tuberculosis that involved
            statistical analysis. My interest extends to computational and
            mathematical techniques like neural data analysis and
            neuroplasticity’s practical applications, with a dedication to
            rigorous academics, research, and hands-on lab experiments. I aspire
            to use this knowledge to make a positive impact on people's lives,
            envisioning a future where insights from my studies can be applied
            to improve mental health, develop effective therapeutic
            interventions, and help individuals better navigate their emotions.
          </div>
        </TabContent>

        <TabContent visible={activeTab === "passion"}>
          <div className="tab-content select-none">
            Flirting with life through travel is an affair of the soul, a tango
            of the heart with different landscapes and cultures. Every new
            destination becomes a captivating lover, leaving me entangled in a
            passionate affair of discovery. Travel, to me, is not just a
            passion; it's an unabashed pursuit of growth, an audacious dance
            with the unknown. With every journey, I delve deeper into the canvas
            of self-discovery, unfolding the layers of my essence. Each
            expedition becomes a blank page where I inscribe the hues of my
            identity, expanding the boundaries of who I am. In the still moments
            between journeys, I find solace in the melodies of music, singing,
            and the art of weaving words into stories. I enjoy every genre of
            music. Music is relaxing to me. At times, singing is a way to
            articulate the unspoken emotions that have danced with me. And then
            there’s writing - I have studied and read about philosophy,
            literature, psychology, and a lot more. And from trying to find out
            the logic in the readings, which contain the wisdom of ages, I
            connect the dots of knowledge to shape my understanding. Writing
            makes me feel more lively. It is a means for me to find comfort and
            articulate my thoughts about feelings, nature, and knowledge as well
            as look back on life experiences. These passions aren’t mere
            pastimes, Here I find not only a reflection of who I am but a
            celebration of the ever-evolving masterpiece that is my life.
          </div>
        </TabContent>
      </div>
    </div>
  );
};

export default ContentTabbing;
