import React from 'react'
import { Column2, SubTitle, Img, ImgWrap, InfoContainer, InfoWrapper, Column1, TextWrapper, TopLine, Heading } from './InfoElements'

const InfoSection = () => {
    return (
        <>
           <InfoContainer>
               <InfoWrapper>
                   <Column1>
                   <TextWrapper>
                       <TopLine>TopLine</TopLine>
                       <Heading>Heading</Heading>
                       <SubTitle>Subtitle</SubTitle>
                   </TextWrapper>
                   </Column1>
                   <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                   </Column2>
               </InfoWrapper>
           </InfoContainer>
        </>
    )
}

export default InfoSection
