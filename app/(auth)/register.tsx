import { registrationScreens } from "@/constants/data";
import { useRegistrationStep } from "@/store/registrationStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OtpScreen from "./_screens/OtpScreen";
import PhoneScreen from "./_screens/PhoneScreen";

const Stack = createNativeStackNavigator();

const Register = () => {
  const currentStep = useRegistrationStep();

  const getInitialRoute = () => {
    switch (currentStep) {
      case 1:
        return registrationScreens[0].title;
      case 2:
        return registrationScreens[1].title;
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
    </Stack.Navigator>
  );
};

export default Register;
