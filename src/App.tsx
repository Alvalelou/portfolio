import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lana Estrada</h1>
      

    <div className="video-wrapper">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/1164117893?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Past Projects"
        />
      </div>
    </div>

    <div className="video-wrapper">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/1164119190?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Maschinen Mensch Portfolio"
        />
      </div>
    </div>

    <div className="video-wrapper">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/466935991?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="[INSIDES] La Tutuma - Cimarrones"
        />
      </div>
    </div>
    <h2 className='bio-header'>BIO</h2>
    <p>
        Hi, I'm Lana — , Content Creator and Video Producer based in Berlin. I grew up in Lima studying music and composing songs nobody heard. Later came advertising and a Bachelor in business , picking up cameras somewhere in between and figuring out the rest as I went. Founded Montania Films and spent five years directing small music videos, theater trailers and brand content. Before that, I produced work for brands like PlayStation, Jeep, and Apple at Vatio Productions.  At Berlin indie studio Maschinen Mensch, I made trailers and social content for Mother Machine.
      </p>
      <h2>CURIOUS FACTS</h2>
        <p>I stream on Twitch as LelouLavender were we Co-work, play cozy shooters, indie games or talk about cute and vulnerable stuff.
      </p>
    <h2>CONTACT</h2>
    <div className="contact">
      <a href="mailto:lana.estrada@proton.me">lana.estrada@proton.me</a>
    </div>
    </div>
  );
}

export default App;
