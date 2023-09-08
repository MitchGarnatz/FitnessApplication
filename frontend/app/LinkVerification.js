import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { IconBg, StyledContainer, TopHalf, BottomHalf, Colors, InfoText, EmphasizeText, PageTitle, StyledButton, ButtonText, InlineGroup, TextLinkContent, TextLink} from './components/styles';
import { Octicons, Ionicons } from '@expo/vector-icons';

import ResendTimer from './components/ResendTimer';

const { brand, green } = Colors;

const Verification = () => {
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
                    <EmphasizeText>test.tothepointcode@gmail.com</EmphasizeText>
                </InfoText>

                <StyledButton 
                onPress={() => {console.log("helloworld")}}
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