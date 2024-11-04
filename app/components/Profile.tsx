import React from 'react'
import Image from 'next/image';
import { Profile } from './Footer';

interface ProfileProps {
    profile: Profile;
    setSelectedProfile: (profile: Profile | null) => void;
}

function ProfileIcon({ profile, setSelectedProfile }: ProfileProps) {
  return (
    <a
        href={profile.social}
        key={profile.name}
        className="rounded-lg mx-2 w-[100px] h-[100px] hover:scale-115 transition-transform"
        onMouseEnter={() => setSelectedProfile(profile)}
        // @ts-ignore
        onMouseLeave={() => setSelectedProfile(null)}
    >
        <Image
            src={profile.img}
            alt={profile.name}
            className="rounded-full aspect-square object-cover transition-opacity hover:opacity-100"
            width={100}
            height={100}
        />
    </a>
  )
}

export default ProfileIcon;