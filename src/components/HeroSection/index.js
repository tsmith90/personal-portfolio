import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElemenents';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Todd Smith</HeroH1>
                    <HeroP>Freelance Services For Tomorrow</HeroP>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
