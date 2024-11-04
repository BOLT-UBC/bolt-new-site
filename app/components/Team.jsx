'use client';

import React, { useRef, useEffect, useState } from 'react';
import anime, { AnimeInstance } from 'animejs';
import ProfileIcon from './Profile';

let lastTime = -1;
let accumulateTime = -1;
const MAX_SPEED = 2;

export default function Team({ profiles }) {
  const [animator, setAnimator] = useState();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [accel, setAccel] = useState(1);
  const requestRef = useRef();

  // https://codesandbox.io/s/anime-js-speed-adjustment-lm0ui?file=/src/index.js:158-166
  // https://animejs.com/documentation/#tick
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const animate = (animator, accel, velocity, t) => {
    if (accumulateTime === -1) {
      accumulateTime = t;
    } else {
      const deltaT = t - lastTime;
      velocity = velocity += 0.05 * accel;
      velocity = Math.max(0, velocity);
      velocity = Math.min(MAX_SPEED, velocity);
      accumulateTime += deltaT * velocity;
    }
    lastTime = t;
    animator.tick(accumulateTime);
    requestRef.current = window.requestAnimationFrame((t) =>
      animate(animator, accel, velocity, t)
    );
  };

  useEffect(() => {
    if (animator) {
      const vel = accel === 1 ? 0 : MAX_SPEED;
      requestRef.current = window.requestAnimationFrame((t) =>
        animate(animator, accel, vel, t)
      );
    }
    // Cleanup animation frame listener
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animator, accel]);

  useEffect(() => {
    setAnimator(
      anime({
        targets: ['#anim-profiles'],
        easing: 'linear',
        loop: true,
        translateX: [-(124 * profiles.length), 0],
        duration: 4000 * profiles.length,
        autoplay: false,
      })
    );
  }, [setAnimator]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div className="text-white w-full mb-4 h-[3rem] flex justify-center items-center">
        <span className="font-bold">{selectedProfile?.name}</span> {selectedProfile?.emoji} {selectedProfile?.title}
      </div>
      <div
        className="h-[130px] overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setAccel(-1)}
        onMouseLeave={() => setAccel(1)}
      >
        <div className="flex gap-x-4 will-change-transform" id="anim-profiles">
          {[...profiles].map((profile, i) => (
            <ProfileIcon profile={profile} setSelectedProfile={setSelectedProfile} />
          ))}
        </div>
      </div>
    </div>
  );
}