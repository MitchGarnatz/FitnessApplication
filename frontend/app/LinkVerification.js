import React, { useState, useEffect } from 'react';
import { useNavigation, useGlobalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { IconBg, StyledContainer, TopHalf, BottomHalf, Colors, InfoText, EmphasizeText, PageTitle, StyledButton, ButtonText, InlineGroup, TextLinkContent, TextLink} from './components/styles';
import { Octicons, Ionicons } from '@expo/vector-icons';

import ResendTimer from './components/ResendTimer';

import axios from 'axios';

import { baseAPIUrl } from './components/shared';

const { brand, green } = Colors;

const Verification = () => {

    const navigation = useNavigation();

    const glob = useGlobalSearchParams();
    const email = glob?.email;
    const userId = glob?.userId;

    const [resendingEmail, setResendingEmail] = useState(false);
    const [resendStatus, setResendStatus] = useState('Resend');
    const [timeLeft, setTimeLeft] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    const [activeResend, setActiveResend] = useState(false);

    let resendTimerInterval;

    const calculateTimeLeft = (finalTime) => {
        const difference = finalTime - +new Date();
        if (difference >= 0) {
            setTimeLeft(Math.round(difference / 1000));
        } else {
            setTimeLeft(null);
            clearInterval(resendTimerInterval);
            setActiveResend(true);
        }
    };

    const triggerTimer = (targetTimeInSeconds = 30) => {
        setTargetTime(targetTimeInSeconds);
        setActiveResend(false);
        const finalTime = +new Date() + targetTimeInSeconds * 1000;
        resendTimerInterval = setInterval(() => (
            calculateTimeLeft(finalTime), 1000
        ));
    };

    useEffect(() => {
        triggerTimer();

        return () => {
            clearInterval(resendTimerInterval);
        };
    }, []);

    const resendEmail = async () => {
        setResendingEmail(true);
        // make request
        const url = `${baseAPIUrl}/user/resendVerificationLink`;
        try {
            await axios.post(url, { email, userId });
            setResendStatus('Sent!');
        } catch (error) {
            setResendStatus('Failed!');
            alert(`Resending email failed! ${error.message}`);
        }
        setResendingEmail(false);
        // hold on message
        setTimeout(() => {
            setResendStatus('Resend');
            setActiveResend(false);
            triggerTimer();
        }, 5000);
    };
    
    return (
        <StyledContainer style={{alignItems: 'center',}}>
            <TopHalf>
                <IconBg>
                    <Octicons  name="paper-airplane" size={125} color={brand} />
                </IconBg>
            </TopHalf>

            <BottomHalf>    
                <PageTitle style={{ fontSize: 25 }}> Account Verification </PageTitle>
                <InfoText>
                    <Text>Please verify your email using the link sent to </Text>
                    <EmphasizeText>{`${email}`}</EmphasizeText>
                </InfoText>

                <StyledButton 
                onPress={() => navigation.navigate('login', {email: email})}
                style={{ backgroundColor: green, flexDirection: 'row'}}>
                    <ButtonText>Proceed </ButtonText>
                    <Ionicons name="arrow-forward-circle" size={25} color={'white'}/>
                </StyledButton>
                <ResendTimer
                    activeResend={activeResend}
                    resendingEmail={resendingEmail}
                    resendStatus={resendStatus}
                    timeLeft={timeLeft}
                    targetTime={targetTime}
                    resendEmail={resendEmail}
                />
            </BottomHalf>
        </StyledContainer>
    );
};

export default Verification;