export function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center">
        {/* Compact Back Button */}
        <button
          className="text-white text-md font-medium rounded"
          style={{ padding: '2px 6px' }}
        >
          ←
        </button>
        <h2 className="text-white ml-2 font-serif">MULTIPLAYER/SERVER BROWSER/</h2> 
      </div>
      <h3 className="text-white text-2xl font-bold font-serif mb-4">SERVER INFO</h3> 
      <div className="text-white text-sm font-serif"> 
        <br />
        <h5 className="text-white text-2xl font-bold font-serif mb-4">! RC3-BASEMAPS</h5>
        <h6 className="text-white font-serif">CONQUEST LARGE-LANCANG DAM-CUSTOM-60HZ</h6>
        <p className="text-white font-serif">
          SERVER PROTECTED BY THE_K-50 ANTICHEAT. VIP !RULES, QUESTIONS, REQUEST, APPEAL, VISIT US: WWW.EPG.GG | 
          <br />
          DISCORD
          HTTPS://DISCORD.GG/3R5NK4D
        </p>
      </div>
    </div>
  );
}