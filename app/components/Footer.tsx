import React from 'react'
import { SocialIcon } from 'react-social-icons'
import TrainComponent from './TrainComponent'
import Team from './Team';

export type Profile = {
    name: string;
    emoji: string;
    title: string;
    social: string;
    img: string;
    color: string;
}

const profiles: Profile[] = [
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
        name: 'Angela Felicia',
        emoji: '🚀',
        title: 'Senior Developer',
        social: '',
        img: '/assets/profiles/Angela_Felicia.jpg',
        color: '#34D399',
    },
    {
      name: 'Angela Felicia',
      emoji: '🚀',
      title: 'Senior Developer',
      social: '',
      img: '/assets/profiles/Angela_Felicia.jpg',
      color: '#34D399',
    },
    {
        name: 'Min Li Wang',
        emoji: '😊',
        title: 'VP Marketing',
        social: '',
        img: '/assets/profiles/Min_Li_Wang.jpg',
        color: '#34D399',
    },
    {
        name: 'Calista Valencia Budi',
        emoji: '🌸',
        title: 'Marketing Coordinator',
        social: '',
        img: '/assets/profiles/Calista_Valencia_Budi.jpg',
        color: '#34D399',
    },
  ];
  
function Footer() {
  return (
    <div>
        <Team profiles={profiles} />
        <div className="flex flex-col items-center pb-8 px-12">
            <div className="bg-white w-full h-[0.5px] mb-6"></div>
        <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row gap-4">
                <SocialIcon 
                    url="https://www.facebook.com/BOLTUBC" 
                    bgColor="transparent"
                    fgColor="white"
                    className="hover:scale-125 transition-all duration-300"
                />
                <SocialIcon 
                    url="https://www.linkedin.com/company/bolt-ubc" 
                    bgColor="transparent"
                    fgColor="white"
                    className="hover:scale-125 transition-all duration-300"
                />
                <SocialIcon 
                    url="https://www.instagram.com/bolt.ubc"
                    bgColor="transparent"
                    fgColor="white"
                    className="hover:scale-125 transition-all duration-300"
                />
            </div>
            <p className="text-white">Copyright &copy; BOLT UBC, 2024</p>
        </div>
    </div>
    </div>
  )
}

export default Footer