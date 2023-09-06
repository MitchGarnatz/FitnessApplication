import React from 'react';
import { Text, View } from 'react-native';
import { IconBg, StyledContainer, TopHalf, BottomHalf, Colors, InfoText, EmphasizeText, PageTitle, StyledButton, ButtonText, InlineGroup, TextLinkContent, TextLink} from './components/styles';
import { Octicons, Ionicons } from '@expo/vector-icons';

const { brand, green } = Colors;

const Verification = () => {
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
                <View>
                    <InlineGroup>
                        <InfoText>Didn't recieve an email? </InfoText>
                        <TextLink onPress={() => {console.log("helloworld")}}>
                            <TextLinkContent style={{textDecorationLine: 'underline'}}>
                                Resend
                            </TextLinkContent>
                        </TextLink>
                    </InlineGroup>
                    <InfoText>
                        in <EmphasizeText>{`20`}</EmphasizeText> second(s)
                    </InfoText>
                </View>
            </BottomHalf>
        </StyledContainer>
    );
};

export default Verification;