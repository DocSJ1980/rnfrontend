import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#076f29',
  green: '#10B981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  padding-bottom: 5px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  text-align: center;
  color: ${brand};
  padding: 5px;
  margin-bottom: 20px;
  margin-vertical: 10px;
  ${(props) =>
    props.welcome &&
    `
        margin-vertical: 5px;
        margin-bottom: 0px;
    font-weight: normal;
  `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding-left: 55px;
  border-radius: 5px;
  font-size:16px;
  height: 40px;
  margin-bottom: 5px;
  color: ${tertiary};
`;

export const StyledTextInputLabel = styled.Text`
  font-size: 13px;
  text-align: left;
  color: ${brand};   
  padding: 10px;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 47px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 47px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 45px;
  margin-vertical: 25px;
  margin-left: 100px;
  height: 45px;
  width: 120px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 18px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) =>
    props.type == true ? brand : red
  }
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;

export const StyledButtonSmall = styled.TouchableOpacity`
  padding: 1px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 45px;
  height: 30px;
  width: 70px;
`;

export const SmallButtonText = styled.Text`
  color: ${primary};
  font-size: 14px;
`;
