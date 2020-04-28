import React, {useState, useEffect} from 'react'
import Profile from '../Profile/Profile'
import axios from 'axios';
import {ProfilesContainer,HeaderTitle} from "./ProfilesStyle";


const Profiles = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [profiles, setProfiles] = useState({})

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://json-placeholder-api.now.sh/api/profiles')
                setProfiles(data.default)
                setIsLoading(false)
                
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        
        
    }, [])


    let loadingProfiles = [];

    for (let i = 0; i < 5; i++) {
        loadingProfiles.push(<Profile loading={true} key={i} />)
    }

    if (isLoading) {
        return (
            <ProfilesContainer>
                <HeaderTitle>Profiles</HeaderTitle>
                {loadingProfiles}
            </ProfilesContainer>
        )
    }

    return (
        <ProfilesContainer>
            <HeaderTitle>Profiles</HeaderTitle>
            {profiles.profiles.map(profile => (
                <Profile data={profile} key={profile.id} />
            ))}
        </ProfilesContainer>
    )
}

export default Profiles
