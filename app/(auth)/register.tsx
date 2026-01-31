import { registrationScreens } from "@/constants/data";
import { useRegistrationStep } from "@/store/registrationStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OtpScreen from "./_screens/OtpScreen";
import PersonalizationScreen from "./_screens/PersonalizationScreen";
import PhoneScreen from "./_screens/PhoneScreen";
import ProfileScreen from "./_screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Register = () => {
  const currentStep = useRegistrationStep();

  const getInitialRoute = () => {
    switch (currentStep) {
      case 1:
        return registrationScreens[0].title;
      case 2:
        return registrationScreens[1].title;

      case 3:
        return registrationScreens[2].title;
      case 4:
        return registrationScreens[3].title;
      default:
        return registrationScreens[0].title;
    }
  };
  return (
    <Stack.Navigator
      initialRouteName={getInitialRoute()}
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name={registrationScreens[0].title}
        component={PhoneScreen}
      />
      <Stack.Screen name={registrationScreens[1].title} component={OtpScreen} />
      <Stack.Screen
        name={registrationScreens[2].title}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={registrationScreens[3].title}
        component={PersonalizationScreen}
      />
    </Stack.Navigator>
  );
};

export default Register;
