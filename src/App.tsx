import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Alva Arnaez</h1>
      

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
        Alva is a video creator and content producer based in Berlin. She grew up in Lima studying music and composing songs nobody heard. Later came advertising, then business, picking up cameras somewhere in between and figuring out the rest as she went. She founded Montania Films and spent five years directing music videos, theater trailers and brand content. Before that, she produced work for brands like PlayStation, Jeep, and Apple at Vatio Productions. At Berlin indie studio Maschinen Mensch, she made trailers and social content for Mother Machine.
      </p>
      <h2>CURIOUS FACTS</h2>
        <p>She streams on Twitch as LelouLavender. Cozy shooters, indie games, and the kind of conversations you'd have at 2am with someone you just met. Video games have been part of her life since childhood, growing up with Nintendo and PlayStation. Her favorite is Final Fantasy IX, but she also has a special connection to Crash Team Racing, a game that, according to her, once genuinely saved her life when years of virtual drifting kicked in on a wet highway. She's such a gamer that she even figured out how to edit videos using a PS4 controller.
      </p>
    </div>
  );
}

export default App;
