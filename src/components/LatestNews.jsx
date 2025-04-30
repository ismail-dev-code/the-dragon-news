import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-2 py-2">Latest</p>
      <Marquee className="flex gap-10" speed={100}>

      <p className="font-bold">
      The European Investment Bank (EIB) has expressed its intention to double its financing to Bangladesh, aiming for a total of €2 billion. This funding will support projects in green energy, water safety, communications, and climate change mitigation.
      </p>
      <p className="font-bold">
      Reform Commissions: The interim government has established 11 reform commissions, including those focused on the Constitution, electoral system, police, judiciary, and anti-corruption measures. These commissions aim to rebuild state institutions and ensure democratic governance.
      </p>
      <p className="font-bold">
      National Consensus Commission: To facilitate dialogue among political parties, a National Consensus Commission has been formed. This body seeks to build agreement on the scope and implementation of reforms necessary before elections can be conducted.
      </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
