import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://wallpapercave.com/wp/wp2705792.jpg"
        profileSrc="https://wallpaperaccess.com/full/1717717.jpg"
        title="Ronaldo"
      />

      <Story
        image="https://i.pinimg.com/736x/74/49/ce/7449ce1e229a374785ec369ae1922e68.jpg/"
        profileSrc="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b2e406103024081.5f441788f1e7e.jpg"
        title="Havertz"
      />

      <Story
        image="https://i.pinimg.com/originals/a1/50/5e/a1505eb0740ad68c6655cfea19de890a.jpg"
        profileSrc="http://4.bp.blogspot.com/-PfYYgRBp4Vo/U0G6uYBJhOI/AAAAAAAAN6M/Gg8zvdLwDfU/s1600/iP5xiOS7-RVP.jpg"
        title="Van Persie"
      />

      <Story
        image="https://wallpaperaccess.com/full/1088646.jpg"
        profileSrc="https://c4.wallpaperflare.com/wallpaper/35/637/279/soccer-harry-kane-tottenham-hotspur-f-c-wallpaper-preview.jpg"
        title="Kane"
      />

      <Story
        image="https://cdn.hipwallpaper.com/i/5/8/PHzelY.jpg"
        profileSrc="https://i.pinimg.com/originals/9b/5d/a2/9b5da2f7ef2dd47edfb9a938bd61f8ba.jpg"
        title="Gerrard"
      />
    </div>
  );
}

export default StoryReel;
