import { Emb, Emb2 } from "../../components/styles/About.styles";

export const aboutPara1 =
  "Hi, I'm Ishita Srivastava — a passionate tech enthusiast and developer currently pursuing my B.Tech at Madan Mohan Malaviya University of Technology. My love for coding and curiosity about how systems work led me to contribute to real-world projects, organize impactful events, and engage deeply with developer communities.";

export const aboutPara2 = {
  para: "I’ve been a GSSoC contributor, completed Hacktoberfest, and served as a Postman Student Expert. As part of the organizing team for HackNITR and Ennexus, I helped conduct development and coding competitions that fostered innovation and collaboration.",
  communities: [
    "Postman Student Program",
    "GSSoC (GirlScript Summer of Code)",
    "HackNITR",
    "CES MMMUT",
  ],
  events: ["HackNITR", "Hacktoberfest", "Ennezus"],
};

export const AboutComponent = () => {
  const cont = {
    para: "I’ve contributed to open source through GSSoC and completed Hacktoberfest. As a Postman Student Expert and CES executive member, I've actively engaged with the developer ecosystem. I’ve also organized Ennezus, a tech fest that featured coding and development competitions. ",
    communities: ["Postman Student Program", "GSSoC", "HackNITR", "CES MMMUT"],
    events: ["HackNITR", "Ennexus"],
  };

  return (
    <div>
      <p>
        I’m a <Emb>Postman Student Expert</Emb>, and have been a part of{" "}
        <Emb>GSSoC</Emb> as a contributor. {cont.para}
        Events organized:{" "}
        <Emb2>
          {cont.events.map((e, index) => (
            <span key={index}>
              {e}
              {index < cont.events.length - 1 ? ", " : ""}
            </span>
          ))}
        </Emb2>
      </p>
      <p>
        I'm an active member of{" "}
        <Emb>
          {cont.communities.map((c, idx) => (
            <span key={idx}>
              {c}
              {idx < cont.communities.length - 1 ? ", " : "."}
            </span>
          ))}
        </Emb>
      </p>
    </div>
  );
};

export const aboutPara3 = {
  stack: [
    "React Native",
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Python",
    "Docker",
    "GitHub Actions",
    "Firebase",
  ],
  fields: [
    "Mobile App Development",
    "Full-Stack Web Development",
    "DevOps",
    "Cloud Integration",
  ],
};
