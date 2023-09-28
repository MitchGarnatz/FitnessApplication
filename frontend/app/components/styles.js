import styled from 'styled-components/native';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#333333",
    darkLight: "#9CA3AF",
    brand: "#d6b976",
    green: "#10B981",
    red: "#EF4444",
    lightGreen: 'rgba(244,244,244,0.1)',
}

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled(View)`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    // background-color: ${tertiary};
`;

export const InnerContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const ContentContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
    // background-color: ${tertiary};
`;

export const PageLogo = styled(Image)`
    width: 300px;
    height: 200px;
`;

export const Avatar = styled(Image)`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled(Image)`
    height: 50%;
    min-width: 100%;
`;

export const PageTitle = styled(Text)`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    color: ${brand};

    ${(props) => props.welcome && `
        font-size: 35px;  
    `}
`;

export const SubTitle = styled(Text)`
    font-size: 18px;
    margin-bottom: 20px;
    padding: 5px;
    padding-top: 25px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    color: #333333;

    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;    
    `}
`;

export const StyledFormArea = styled(View)`
    width: 90%;
`;

export  const StyledTextInput = styled(TextInput)`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled(Text)`
    color: white;
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled(View)`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled(TouchableOpacity)`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled(Text)`
    color: ${tertiary};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding-left: 10px;
    `}
`;

export const MsgBox = styled(Text)`
    text-align: center;
    font-size: 13px;
    color: ${props => props.type == 'SUCCESS' ? green : red};
`;

export const Line = styled(View)`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled(View)`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding 10px;
`;

export const ExtraText = styled(Text)`
    justify-content: center;
    align-content: center;
    color: white;
    font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled(Text)`
    color: blue;
    font-size: 15px;

    ${(props) => {
        const { resendStatus } = props;
        if (resendStatus === 'Failed!') {
            return `color: ${Colors.red}`;
        } else if (resendStatus === 'Sent!') {
            return `color: ${Colors.green}`;
        }
    }}

`;

export const TopHalf = styled(View)`
    flex: 1;
    justify-content: center;
    padding: 20px;
`;

export const BottomHalf = styled(TopHalf)`
    justify-content: space-around;
`;

export const IconBg = styled(View)`
    width: 250px;
    height: 250px;
    background-color: ${Colors.secondary};
    border-radius: 250px;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const InfoText = styled(Text)`
    text-align: center;
    color: #333333;
    font-size: 15px;
`;

export const EmphasizeText = styled(Text)`
    font-weight: bold;
    font-style: italic;
`;

export const InlineGroup = styled(View)`
    flex-direction: row;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const NewLine = styled(View)`
    flex-direction: row;
    padding: 5px;
`;

export const TopRightContainer = styled(View)`
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    background-color: none; /* Background color for the container */
    border: 1px solid #333333; /* White border for the outline */
    border-radius: 5px; /* Border radius for rounded corners */
    padding: 5px; /* Padding for some space around the icon */
`;

export const CheckListContainer = styled(View)`
  background-color: none;
  border: 1px solid ${Colors.primary};
  width: 100%;
  justify-content: center;
    align-items: center;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

export const CheckListItem = styled(View)`
    background-color: ${Colors.primary};
  border: 1px solid ${Colors.secondary};
  width: 95%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Bubble = styled(View)`
  background-color: white;
  width: 95%;
  border-radius: 5px;
  padding: 10px;
  
  /* Add shadow properties based on platform */
  ${Platform.select({
    ios: {
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    android: {
      elevation: 5, // Elevation for Android shadow
    },
  })}
`;

export const PlanSubTitle = styled(Text)`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #333333;
`;

export const RedaptBackground = styled(LinearGradient).attrs({
    colors: ['white', 'light-grey', 'white'],
    start: [0, 0],
    end: [1,0]
  })`
    flex: 1;
    padding-top: 20px;
  `;