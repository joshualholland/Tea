import React from 'react'
import styled from 'styled-components'


const post: string = 'review one'

const ReviewLists: React.FC = () => (
  <Wrapper>
      <ListWrapper>
        <ULStart>
            <LIStart key={post}>
                <ReviewImg />
                <ReviewTitle>
                    Title of Post #1
                    <ReviewBody>
                    Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Fringilla ut morbi tincidunt augue interdum velit. Morbi non arcu risus quis varius quam. Senectus et netus et malesuada fames ac turpis. Consequat interdum varius sit amet. Vel orci porta non pulvinar neque. Ante metus dictum at tempor commodo ullamcorper. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis blandit turpis cursus in hac.
                    </ReviewBody>
                </ReviewTitle> 
                  
            </LIStart>
            <LIStart key={post}>
                <ReviewImg />
                <ReviewTitle>
                    Title of Post #2
                    <ReviewBody>
                    Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Fringilla ut morbi tincidunt augue interdum velit. Morbi non arcu risus quis varius quam. Senectus et netus et malesuada fames ac turpis. Consequat interdum varius sit amet. Vel orci porta non pulvinar neque. Ante metus dictum at tempor commodo ullamcorper. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis blandit turpis cursus in hac.
                    </ReviewBody>
                </ReviewTitle>  
                      
            </LIStart>    
        </ULStart>    
      </ListWrapper>  
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default ReviewLists

const Wrapper = styled.section<IProps>`
  width: 100%;
  max-width: 70vw;
  margin: 16px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
`

const ListWrapper = styled.div<IProps>`
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 100%;
  margin-top: 1em;  
  background: ${props => props.theme.palette.common.white};
  height: 90vh;
  border-radius: ${props => props.theme.borderRadius};
`

const ULStart = styled.ul<IProps>`
  margin: 1em; 
  list-style: none;
`

const LIStart = styled.li<IProps>`
  display: flex;
  flex-flow:row;
  margin: 1em;
  padding: 1.2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.common.white};   
  color: ${props => props.theme.palette.tertiary.main};
 
`


const ReviewImg = styled.div<IProps>`
  background-image: url('https://stonerthings.com/wp-content/uploads/2013/11/weed-in-a-jar.jpg');
  width: 20%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius};
 
`

const ReviewTitle = styled.h3<IProps>`
  margin: 1em;  
  width: 100%; 
`

const ReviewBody = styled.p<IProps>`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`