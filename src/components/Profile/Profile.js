import React from 'react'
import { Skeleton } from '../LoadingSkeleton/LoadingSkeletons'
import {Container,ImageContainer,Image,Name,Username,Email} from "./ProfileStyle";


const Profile = ({loading, data}) => {
  if (loading === true) {
    return (
      <Container>
          <ImageContainer>
              <Skeleton borderRadius={25} />
          </ImageContainer>
          <div>
              <Name><Skeleton borderRadius={20} /></Name>
              <Email><Skeleton borderRadius={20} /></Email>
          </div>
      </Container>

      )
  }
  if (data) {
    return (
        <Container>
            <ImageContainer>
                <Image src={data.picture} />
            </ImageContainer>
            <div>
                <Name>{data.name}</Name>
                <Email>{data.email}</Email>
            </div>
        </Container>
    )
  }

  return null;
}

export default Profile
